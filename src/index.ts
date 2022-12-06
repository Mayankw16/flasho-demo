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

    static async createSmsTrigger(requestBody: SmsRequestBodyType) {
        try {
            const response = await axios.post(`http://localhost:8000/api/v1/manual_sms/send_new_manual_templated_sms`, JSON.stringify(requestBody));
            return response;
          } catch (error) {
            console.error(error);
          }
    }

    static async createEmailTrigger(requestBody: EmailRequestBodyType) {
        try {
            const response = await axios.post(`http://localhost:8000/api/v1/manual_email/send_new_manual_templated_email`, JSON.stringify(requestBody));
            return response;
          } catch (error) {
            console.error(error);
          }
    }

    static async getSmsTrigger(triggerName: string) {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/manual_sms/${triggerName}`);
            return response;
          } catch (error) {
            console.error(error);
          }
    }

    static async getEmailTrigger(triggerName: string) {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/manual_emial/${triggerName}`);
            return response
          } catch (error) {
            console.error(error);
          }
    }
}