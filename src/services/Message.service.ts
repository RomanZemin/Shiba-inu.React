import axios from "axios";
import { IMessage } from "../components/helpers/Types";

class MessageService {
  private URL = "http://localhost:3000/message";

  async getMessage() {
    const {data} = await axios.get<IMessage[]>(this.URL);
    return data;
  }

  async sendMessage(text: string) {
    const {data} = await axios.post(this.URL, {
      text,
    });
    return data;
  }
}

export const messageService = new MessageService();
