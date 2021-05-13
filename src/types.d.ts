type AddTodo = (newTodo: string) => void;

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type Toggle = (id: number) => void;
type Remove = (id: number) => void;

interface IntrinsicElements {
  img: HTMLAttributes & {
    src: string;
  };
}
