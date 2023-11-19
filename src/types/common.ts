import React from "react";

export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

export type IResponseSuccess = {
  data?: any;
  meta?: IMeta;
};

export type IResponseError = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IChildrenProps = {
  children: React.ReactNode | React.ReactElement;
};
