export type Task = {
    id: string;
    title: string;
    status: string;
    category?: {
      name: string|null
    };
    isCreatedByUser:boolean
  };
  export type ButtonProps = {
    text: string;
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
  };