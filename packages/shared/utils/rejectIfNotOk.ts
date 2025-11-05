export function rejectIfNotOk<T>(res: Response): Promise<T> {
  if (res.ok) {
    return res.json()
  }
  return new Promise((_, reject) => res.json().then((e) => reject(e)))
}
