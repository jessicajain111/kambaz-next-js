"use client";

import { useState, useEffect, useCallback } from "react";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import PeopleTable from "@/app/(kambaz)/courses/[cid]/people/PeopleTable";
import * as client from "../client";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = useCallback(async () => {
    const list = await client.findAllUsers();
    setUsers(list);
  }, []);

  useEffect(() => {
    void fetchUsers();
  }, [fetchUsers]);

  const filterUsersByRole = async (nextRole: string) => {
    setRole(nextRole);
    if (nextRole) {
      const list = await client.findUsersByRole(nextRole);
      setUsers(list);
    } else {
      await fetchUsers();
    }
  };

  const filterUsersByName = async (partial: string) => {
    setName(partial);
    if (partial) {
      const list = await client.findUsersByPartialName(partial);
      setUsers(list);
    } else {
      await fetchUsers();
    }
  };

  const createUser = async () => {
    await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    if (role) {
      setUsers(await client.findUsersByRole(role));
    } else if (name) {
      setUsers(await client.findUsersByPartialName(name));
    } else {
      await fetchUsers();
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => void createUser()}
        className="float-end btn btn-danger wd-add-people"
      >
        <FaPlus className="me-2" />
        People
      </button>
      <h3>Users</h3>
      <select
        value={role}
        onChange={(e) => void filterUsersByRole(e.target.value)}
        className="form-select float-start w-25 wd-select-role me-2 mb-2"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
        <option value="USER">Users</option>
      </select>
      <FormControl
        value={name}
        onChange={(e) => void filterUsersByName(e.target.value)}
        placeholder="Search people"
        className="float-start w-25 me-2 mb-2 wd-filter-by-name"
      />
      <div className="clearfix" />
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
