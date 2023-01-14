import { Either, right, left } from '@sweet-monads/either';
import axios from 'axios';
import { NetworkError } from '../errors/networkError';

export default {
  async get<T>(route: string): Promise<Either<NetworkError, T>> {
    try {
      const { data } = await axios.get(route);
      return right(data);
    } catch (e) {
      return left(new NetworkError('api error'));
    }
  }
}