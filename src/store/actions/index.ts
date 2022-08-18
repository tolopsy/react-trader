import { createAction } from "@reduxjs/toolkit";

export const PURGE_ACTION = "purgeAction";
export const purgeAction = createAction(PURGE_ACTION);