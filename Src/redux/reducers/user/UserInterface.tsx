

export type ILoginRequest = {  
  date: string;
  firstName: any;
  lastName: any;
};

export interface IUserState {
  userData: any | null;
  rememberUserData: ILoginRequest[];
 
}
