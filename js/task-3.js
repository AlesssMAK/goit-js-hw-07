function handleSubmit(event) {
    event.preventDefault();
  
    const elements = event.target.elements;
  
    const info = {
      email: elements.email.value,
      password: elements.password.value,
      comment: elements.comment.value
    }
  
    console.log(info);
    event.target.reset();
  }