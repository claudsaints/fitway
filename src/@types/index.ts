 interface UserDTO  {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface ExerciseDTO {
  id: string;
  demo: string;
  group: string;
  name: string;
  repetitions: string;
  series: number;
  thumb: string;
  updated_at: string;
}


export {
    UserDTO,
    ExerciseDTO
}