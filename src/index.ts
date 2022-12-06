import axios from "axios";

interface EmailRequestBodyType {
    to: {
        id: number
    },
    payload: {
        trigger_name: string,
        receipient_addresses: Array<string>,
        configuration: {
            variables: any
        }
    }
}

interface SmsRequestBodyType {
    to: {
        id: number
    },
    payload: {
        trigger_name: string,
        receipient_phone: Array<string>,
        configuration: {
            variables: any
        }
    }
}

export class flasho {

    static async createSmsTrigger(requestBody: SmsRequestBodyType, config:any) {
        try {
            const response:any = await axios.post<any>(`http://localhost:8000/api/v1/manual_sms/send_new_manual_templated_sms`, JSON.stringify(requestBody), config);
            return response.data;
          } catch (error:any) {
            console.error(error);
          }
    };

    static async createEmailTrigger(requestBody: EmailRequestBodyType, config:any) {
        try {
            const response:any = await axios.post<any>(`http://localhost:8000/api/v1/manual_email/send_new_manual_templated_email`, JSON.stringify(requestBody), config);
            return response.data;
          } catch (error:any) {
            console.error(error);
          }
    };

    static async getSmsTrigger(triggerName: string, config:any) {
        try {
            const response:any = await axios.get<any>(`http://localhost:8000/api/v1/manual_sms/${triggerName}`, config);
            return response.data;
          } catch (error:any) {
            console.error(error);
          }
    };

    static async getEmailTrigger(triggerName: string, config:any){
        try {
            const response:any = await axios.get<any>(`http://localhost:8000/api/v1/manual_email/${triggerName}`, config);
            return response.data;
          } catch (error:any) {
            console.error(error);
          }
    };
}