var selector = document.querySelector("input[type='tel']");
      var im = new Inputmask("+7 (999)999-99-99");
      im.mask(selector);

      new JustValidate('.form', {
        rules: {
          name: {
            required: true,
            minLength: 2,
            maxLength: 30
          },
          tel: {
            required: true,
            function: (name, value) => {
              const phone = selector.inputmask.unmaskedvalue()
              console.log(phone)
              return Number(phone) && phone.length === 10
            }
          },
        },
        messages: {
          name: 'Как Вас зовут?',
          tel: 'Укажите ваш телефон',
          
        }
      })