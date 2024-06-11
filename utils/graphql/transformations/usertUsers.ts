interface IFormdata {
    name: string;
    email: string;
    image: string;
    roleId: string;
  }
  
  interface IProps {
    formdata: IFormdata;  
  }
  
  const upsertUserTransformation = ({ formdata }: IProps) => {
    const { name, email, image, roleId } = formdata;
  
    const dataCreate = {
      name: name,
      email: email,
      image: image,
      roleId: roleId,
    };
  
    const dataUpdate = {
      name: {
        set: name,
      },
      email: {
        set: email,
      },
      image: {
        set: image,
      },
      roleId: {
        set: roleId,
      },
    };
  
    return { dataCreate, dataUpdate };
  };
  
  export { upsertUserTransformation };
  