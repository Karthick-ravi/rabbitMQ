import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async fetchDataFromThirdParty(): Promise<any> {
    try {
      const response = await axios.get('https://jsfiddle.net/rxqwfas5/');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);      
    }
  }
}

