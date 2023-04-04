const emailValidate = {
  valid: (email) => {
    console.log(email);
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  },
};

export default emailValidate;
