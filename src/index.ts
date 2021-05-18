export interface Option {
  val: number;
  desc: string;
}

export function buildOptions(val, desc): Option {
  return { val: val, desc: desc };
};

export interface RestService<T> {
  getAll();
  get(id: number);
  post(item: T);
  put(item: T);
  options(): Option[] | Promise<Option[]>;
}