"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./PeopleTable";
import * as coursesClient from "../../client";

export default function PeoplePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = useCallback(async () => {
    if (!cid) return;
    const list = await coursesClient.findUsersForCourse(cid as string);
    setUsers(list);
  }, [cid]);

  useEffect(() => {
    void fetchUsers();
  }, [fetchUsers]);

  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}
