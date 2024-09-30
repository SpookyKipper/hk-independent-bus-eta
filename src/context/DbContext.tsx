import React, { useEffect, useState, useCallback, useMemo } from "react";
import type { ReactNode } from "react";
import { isEmptyObj } from "../utils";
import { fetchDbFunc } from "../db";
import type { DatabaseType } from "../db";
import { isHoliday } from "../timetable";

interface DatabaseContextState {
  db: DatabaseType;
  autoRenew: boolean;
}

interface DatabaseContextValue extends DatabaseContextState {
  AppTitle: string;
  isTodayHoliday: boolean;
  renewDb: () => Promise<void>;
  toggleAutoDbRenew: () => void;
}

interface DbProviderProps {
  initialDb: DatabaseType;
  children: ReactNode;
}

const DbContext = React.createContext<DatabaseContextValue>(
  {} as DatabaseContextValue
);

export const DbProvider = ({ initialDb, children }: DbProviderProps) => {
  const AppTitle = "巴士到站預報 App （免費無廣告）";
  // route list & stop list & route-stop list
  const [{ db, autoRenew }, setState] = useState<DatabaseContextState>({
    db: initialDb,
    autoRenew: !!JSON.parse(localStorage.getItem("autoRenew") ?? "false"),
  });

  const renewDb = useCallback(
    () =>
      fetchDbFunc(true).then((db) =>
        setState((prev) => ({
          ...prev,
          db,
        }))
      ),
    []
  );

  const toggleAutoDbRenew = useCallback(() => {
    setState((prev) => {
      localStorage.setItem("autoRenew", JSON.stringify(!prev.autoRenew));
      return {
        ...prev,
        autoRenew: !prev.autoRenew,
      };
    });
  }, []);

  useEffect(() => {
    // skip if db is {}
    if (
      db &&
      !isEmptyObj(db.routeList) &&
      !isEmptyObj(db.stopList) &&
      !isEmptyObj(db.stopMap)
    ) {
      // TODO skip if db version is the same

      // make costly compression async
      setTimeout(() => {
        let request = indexedDB.open("hkbus", 1);
        request.onupgradeneeded = (event) => {
          let idb = (event.target as IDBOpenDBRequest).result;
          idb.createObjectStore("etadb", { keyPath: "versionMd5" });
        };
        request.onsuccess = (event) => {
          let idb = (event.target as IDBOpenDBRequest).result;
          let transaction = idb.transaction(["etadb"], "readwrite");
          let store = transaction.objectStore("etadb");
          store.put(db);
        };
      }, 0);
    }
  }, [db]);

  const isTodayHoliday = useMemo(
    () => isHoliday(db.holidays, new Date()),
    [db.holidays]
  );

  const contextValue: DatabaseContextValue = useMemo(
    () => ({
      AppTitle,
      db,
      autoRenew,
      isTodayHoliday,
      renewDb,
      toggleAutoDbRenew,
    }),
    [AppTitle, db, autoRenew, isTodayHoliday, renewDb, toggleAutoDbRenew]
  );

  return (
    <DbContext.Provider value={contextValue}>{children}</DbContext.Provider>
  );
};

export default DbContext;
export type { DatabaseContextValue, DatabaseType };
