export type Task = {
    id: string;
    title: string;
    status: string;
    category?: {
      name: string|null
    };
  };
  export type ButtonProps = {
    text: string;
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
  };