import axios from "axios";

interface configType {
  headers: {
    accept: string;
    "x-admin-secret-key": string;
    "Content-Type": string;
  };
}

interface reqBodyType {
  variables: any;
}

export class flasho {
  private endpoint: string;
  private config: configType;

  trigger = async (triggerName: string, reqBody: reqBodyType) => {
    try {
      const response = await axios.post(
        `${this.endpoint}/api/v1/manual_event/${triggerName}`,
        JSON.stringify(reqBody),
        this.config
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  constructor(endpoint: string, admin_secret_key: string) {
    this.endpoint = endpoint;
    this.config = {
      headers: {
        accept: "application/json",
        "x-admin-secret-key": admin_secret_key,
        "Content-Type": "application/json",
      },
    };
  }
}
