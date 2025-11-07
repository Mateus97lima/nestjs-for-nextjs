export abstract class HashingService {
  abstract hash(password: string): Promise<string>;
  abstract compare(password: string, hash: string): Promise<boolean>; // E boolean pq  ele vai compara a senha com o hash//
}
