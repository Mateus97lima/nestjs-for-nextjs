import { generateRandomSuffix } from './generate-random-suffix';
import { slugify } from './slugfy';

export function CreateSlug(text: string) {
  const slug = slugify(text);

  return `${slug}-${generateRandomSuffix()}`;
}
