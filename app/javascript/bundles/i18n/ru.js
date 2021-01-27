import I18n from 'i18n-js';
I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {
});
I18n.translations["ru"] = I18n.extend((I18n.translations["ru"] || {}), {
  "account": {
    "are_you_sure": "Вы уверенны?",
    "current_password": "Текущий пароль",
    "delete_account": "Я хочу удалить учетную запись",
    "doctor_profile": "Профиль доктора",
    "edit_account": "Редактировать учетную запись",
    "leave_blank": "оставте пустым, если не хотите изменять",
    "my_schedules": "Мои расписания",
    "my_visits": "Мои визиты",
    "need_password": "введите текущий пароль, чтобы подтвердить изменения",
    "not_saved": "Учетная запись не была создана:",
    "patient_card": "Карточка пациента",
    "update": "Обновить",
    "waiting_confirmation": "Ожидается подтверждение для"
  },
  "activerecord": {
    "attributes": {
      "schedules": {
        "create_schedule": "Сохранить расписание",
        "day": "День",
        "doctor": "Доктор",
        "edit_schedule": "Редактирование расписания",
        "end_date": "Дата конца",
        "end_time": "Время конца",
        "new_schedule": "Новое расписание",
        "no_schedules_message": "У Вас еще нет расписаний",
        "schedules": "Расписания",
        "start_date": "Дата начала",
        "start_time": "Время начала",
        "visit_type": "Тип визита"
      },
      "users": {
        "email": "Электронная почта",
        "is_active": "Активный",
        "name": "Имя",
        "password": "Пароль",
        "password_confirmation": "Подтверждение пароля",
        "phone_number": "Номер телефона",
        "registration_date": "Дата регистрации",
        "role": "Роль",
        "surname": "Фамилия"
      },
      "visit_types": {
        "create_visit_type": "Сохранить тип визита",
        "description": "Описание",
        "duration": "Продолжительность",
        "edit_visit_type": "Редактирование типа визита",
        "minutes": "минут",
        "name": "Название",
        "new_visit_type": "Новый тип визита",
        "visit_types": "Типы визитов"
      },
      "visits": {
        "create_visit": "Создать визит",
        "date": "Дата",
        "doctor": "Доктор",
        "new_visit": "Новый визит",
        "no_visits_message": "У Вас еще нет визитов",
        "patient": "Пациент",
        "time": "Время",
        "visit_type": "Тип визита",
        "visits": "Визиты"
      }
    },
    "errors": {
      "messages": {
        "record_invalid": "Возникли ошибки: %{errors}",
        "restrict_dependent_destroy": {
          "has_many": "Невозможно удалить запись, так как существуют зависимости: %{record}",
          "has_one": "Невозможно удалить запись, так как существует зависимость: %{record}"
        }
      }
    }
  },
  "date": {
    "abbr_day_names": [
      "Вс",
      "Пн",
      "Вт",
      "Ср",
      "Чт",
      "Пт",
      "Сб"
    ],
    "abbr_month_names": [
      null,
      "янв.",
      "февр.",
      "марта",
      "апр.",
      "мая",
      "июня",
      "июля",
      "авг.",
      "сент.",
      "окт.",
      "нояб.",
      "дек."
    ],
    "day_names": [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота"
    ],
    "formats": {
      "default": "%d.%m.%Y",
      "long": "%-d %B %Y",
      "short": "%-d %b"
    },
    "month_names": [
      null,
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря"
    ],
    "order": [
      "day",
      "month",
      "year"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "few": "около %{count} часов",
        "many": "около %{count} часов",
        "one": "около %{count} часа",
        "other": "около %{count} часа"
      },
      "about_x_months": {
        "few": "около %{count} месяцев",
        "many": "около %{count} месяцев",
        "one": "около %{count} месяца",
        "other": "около %{count} месяца"
      },
      "about_x_years": {
        "few": "около %{count} лет",
        "many": "около %{count} лет",
        "one": "около %{count} года",
        "other": "около %{count} лет"
      },
      "almost_x_years": {
        "few": "почти %{count} года",
        "many": "почти %{count} лет",
        "one": "почти 1 год",
        "other": "почти %{count} лет"
      },
      "half_a_minute": "полминуты",
      "less_than_x_minutes": {
        "few": "меньше %{count} минут",
        "many": "меньше %{count} минут",
        "one": "меньше %{count} минуты",
        "other": "меньше %{count} минуты"
      },
      "less_than_x_seconds": {
        "few": "меньше %{count} секунд",
        "many": "меньше %{count} секунд",
        "one": "меньше %{count} секунды",
        "other": "меньше %{count} секунды"
      },
      "over_x_years": {
        "few": "больше %{count} лет",
        "many": "больше %{count} лет",
        "one": "больше %{count} года",
        "other": "больше %{count} лет"
      },
      "x_days": {
        "few": "%{count} дня",
        "many": "%{count} дней",
        "one": "%{count} день",
        "other": "%{count} дня"
      },
      "x_minutes": {
        "few": "%{count} минуты",
        "many": "%{count} минут",
        "one": "%{count} минуту",
        "other": "%{count} минуты"
      },
      "x_months": {
        "few": "%{count} месяца",
        "many": "%{count} месяцев",
        "one": "%{count} месяц",
        "other": "%{count} месяца"
      },
      "x_seconds": {
        "few": "%{count} секунды",
        "many": "%{count} секунд",
        "one": "%{count} секунду",
        "other": "%{count} секунды"
      },
      "x_years": {
        "few": "%{count} года",
        "many": "%{count} лет",
        "one": "%{count} год",
        "other": "%{count} года"
      }
    },
    "prompts": {
      "day": "День",
      "hour": "Часов",
      "minute": "Минут",
      "month": "Месяц",
      "second": "Секунд",
      "year": "Год"
    }
  },
  "days": {
    "friday": "Пятница",
    "monday": "Понедельник",
    "saturday": "Суббота",
    "sunday": "Воскресенье",
    "thursday": "Четверг",
    "tuesday": "Вторник",
    "wednesday": "Среда"
  },
  "devise": {
    "change_password": "Сменить пароль",
    "change_password_error": "Пароль не был изменен:",
    "characters_minimum": "символов минимум",
    "confirm_new_password": "Подтвердите новый пароль",
    "confirmations": {
      "confirmed": "Ваша учётная запись успешно подтверждена.",
      "send_instructions": "В течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи.",
      "send_paranoid_instructions": "Если ваш адрес email есть в нашей базе данных, то в течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи."
    },
    "dnr_confirmation": "Не пришло подтверждение?",
    "failure": {
      "already_authenticated": "Вы уже вошли в систему.",
      "inactive": "Ваша учётная запись ещё не активирована.",
      "invalid": "Неверный %{authentication_keys} или пароль.",
      "last_attempt": "У Вас осталась еще одна попытка ввести пароль до блокировки.",
      "locked": "Ваша учётная запись заблокирована.",
      "not_found_in_database": "Неверный %{authentication_keys} или пароль.",
      "timeout": "Ваш сеанс закончился. Пожалуйста, войдите в систему снова.",
      "unauthenticated": "Вам необходимо войти в систему или зарегистрироваться.",
      "unconfirmed": "Вы должны подтвердить вашу учётную запись."
    },
    "forgot_password": "Забыли пароль?",
    "mailer": {
      "confirmation_instructions": {
        "subject": "Инструкции по подтверждению учётной записи."
      },
      "email_changed": {
        "subject": "Еmail адрес был изменён."
      },
      "password_change": {
        "subject": "Пароль был изменён."
      },
      "reset_password_instructions": {
        "subject": "Инструкции по восстановлению пароля."
      },
      "unlock_instructions": {
        "subject": "Инструкции по разблокировке учётной записи."
      }
    },
    "new_password": "Новый пароль",
    "omniauth_callbacks": {
      "failure": "Вы не можете войти в систему с учётной записью из %{kind}, так как \"%{reason}\".",
      "success": "Вход в систему выполнен с учётной записью из %{kind}."
    },
    "passwords": {
      "no_token": "Эта страница доступна только при переходе с email для сброса пароля. Если Вы перешли по ссылке из письма, пожалуйста, убедитесь, что вы использовали полный URL.",
      "send_instructions": "В течение нескольких минут вы получите письмо с инструкциями по восстановлению вашего пароля.",
      "send_paranoid_instructions": "Если ваш адрес email есть в нашей базе данных, то в течение нескольких минут Вы получите письмо с инструкциями по восстановлению вашего пароля.",
      "updated": "Ваш пароль успешно изменён. Теперь вы вошли в систему.",
      "updated_not_active": "Пароль успешно изменён."
    },
    "registrations": {
      "destroyed": "До свидания! Ваша учётная запись успешно удалена. Надеемся снова увидеть вас.",
      "signed_up": "Добро пожаловать! Вы успешно зарегистрировались.",
      "signed_up_but_inactive": "Вы успешно зарегистрировались. Тем не менее, вы не можете войти, потому что ваша учетная запись ещё не активирована.",
      "signed_up_but_locked": "Вы успешно зарегистрировались. Тем не менее, вы не можете войти, потому что ваша учетная запись заблокирована.",
      "signed_up_but_unconfirmed": "В течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи.",
      "update_needs_confirmation": "Ваш аккаунт успешно обновлен, нонеобходимо подтвердить Ваш новый адрес email. Пожалуйста, проверьте свою электронную почту и нажмите на ссылку \"Подтвердить\", чтобы завершить обновления email.",
      "updated": "Ваша учётная запись успешно изменена.",
      "updated_but_not_signed_in": "Ваш аккаунт успешно изменен, но так как ваш пароль изменился, нужно войти снова."
    },
    "remember_me": "Запомнить меня",
    "resend_ci": "Повторно отправить подтверждение регистрации",
    "reset_password_error": "Инструкция не была отправлена:",
    "send_me_rpi": "Отправить инструкцию для восстановления пароля",
    "sessions": {
      "already_signed_out": "Выход из системы выполнен.",
      "signed_in": "Вход в систему выполнен.",
      "signed_out": "Выход из системы выполнен."
    },
    "unlocks": {
      "send_instructions": "В течение нескольких минут вы получите письмо с инструкциями по разблокировке вашей учётной записи.",
      "send_paranoid_instructions": "Если ваша учётная запись существует, то в течение нескольких минут вы получите письмо с инструкциями по её разблокировке.",
      "unlocked": "Ваша учётная запись разблокирована. Теперь вы вошли в систему."
    }
  },
  "errors": {
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "нужно подтвердить",
      "already_confirmed": "уже подтверждена. Пожалуйста, попробуйте войти в систему",
      "blank": "не может быть пустым",
      "confirmation": "не совпадает со значением поля %{attribute}",
      "confirmation_period_expired": "должен быть подтвержден в течении %{period}, пожалуйста, запросите подтверждение ещё раз",
      "empty": "не может быть пустым",
      "equal_to": "может иметь лишь значение, равное %{count}",
      "even": "может иметь лишь четное значение",
      "exclusion": "имеет зарезервированное значение",
      "expired": "устарела. Пожалуйста, запросите новую",
      "greater_than": "может иметь значение большее %{count}",
      "greater_than_or_equal_to": "может иметь значение большее или равное %{count}",
      "inclusion": "имеет непредусмотренное значение",
      "invalid": "имеет неверное значение",
      "less_than": "может иметь значение меньшее чем %{count}",
      "less_than_or_equal_to": "может иметь значение меньшее или равное %{count}",
      "model_invalid": "Возникли ошибки: %{errors}",
      "not_a_number": "не является числом",
      "not_an_integer": "не является целым числом",
      "not_found": "не найдена",
      "not_locked": "не заблокирована",
      "not_saved": {
        "few": "%{resource}: сохранение не удалось из-за %{count} ошибок",
        "many": "%{resource}: сохранение не удалось из-за %{count} ошибок",
        "one": "%{resource}: сохранение не удалось из-за %{count} ошибки",
        "other": "%{resource}: сохранение не удалось из-за %{count} ошибки"
      },
      "odd": "может иметь лишь нечетное значение",
      "other_than": "должно отличаться от %{count}",
      "present": "нужно оставить пустым",
      "required": "не может отсутствовать",
      "taken": "уже существует",
      "too_long": {
        "few": "слишком большой длины (не может быть больше чем %{count} символа)",
        "many": "слишком большой длины (не может быть больше чем %{count} символов)",
        "one": "слишком большой длины (не может быть больше чем %{count} символ)",
        "other": "слишком большой длины (не может быть больше чем %{count} символа)"
      },
      "too_short": {
        "few": "недостаточной длины (не может быть меньше %{count} символов)",
        "many": "недостаточной длины (не может быть меньше %{count} символов)",
        "one": "недостаточной длины (не может быть меньше %{count} символа)",
        "other": "недостаточной длины (не может быть меньше %{count} символа)"
      },
      "wrong_length": {
        "few": "неверной длины (может быть длиной ровно %{count} символа)",
        "many": "неверной длины (может быть длиной ровно %{count} символов)",
        "one": "неверной длины (может быть длиной ровно %{count} символ)",
        "other": "неверной длины (может быть длиной ровно %{count} символа)"
      }
    },
    "template": {
      "body": "Проблемы возникли со следующими полями:",
      "header": {
        "few": "%{model}: сохранение не удалось из-за %{count} ошибок",
        "many": "%{model}: сохранение не удалось из-за %{count} ошибок",
        "one": "%{model}: сохранение не удалось из-за %{count} ошибки",
        "other": "%{model}: сохранение не удалось из-за %{count} ошибки"
      }
    }
  },
  "helpers": {
    "select": {
      "prompt": "Выберите: "
    },
    "submit": {
      "create": "Создать %{model}",
      "submit": "Сохранить %{model}",
      "update": "Сохранить %{model}"
    }
  },
  "home": {
    "describe_1": "Просматривайте врачей онлайн и записывайтесь к ним.",
    "describe_2": "Вход осуществляется через созданную вами учетную запись или с помощью консультанта.",
    "describe_3": "Рекомендуется предоставить достоверную информацию о ваших хронических заболеваниях и аллергиях, чтобы мы могли оказать вам качественную первую медицинскую помощь.",
    "healthbook": "Healthbook",
    "left_down_h2": "Новинка!",
    "left_down_h4_1": "Мы создали программу лояльности, которая предусматривает -10% на все медицинские услуги в нашей клинике.",
    "left_down_h4_2": "Заходите и получите карту БЕСПЛАТНО!",
    "left_down_h4_3": "Мы ждем вас!",
    "rigth_up_first": "С уважением к вам, мы прилагаем все усилия для оказания качественных медицинских услуг.",
    "rigth_up_second_p1": "НУЖНА ПОМОЩЬ?",
    "rigth_up_second_p2": "Мы с радостью ответим на любые вопросы по оказанию медицинских услуг и предоставим актуальную информацию о вашем здоровье.",
    "rigth_up_third_p1": "Ждем ваших сообщений на ",
    "rigth_up_third_p2": " или напишите здесь свой номер и мы вам перезвоним."
  },
  "i18n": {
    "plural": {
      "keys": [
        "one",
        "few",
        "many",
        "other"
      ],
      "rule": "#<Proc:0x000055b8623fdf98@/home/dv/.rvm/gems/ruby-2.6.6/gems/rails-i18n-6.0.0/lib/rails_i18n/common_pluralizations/east_slavic.rb:16 (lambda)>"
    },
    "transliterate": {
      "rule": "#<Proc:0x000055b862837730@/home/dv/.rvm/gems/ruby-2.6.6/gems/rails-i18n-6.0.0/lib/rails_i18n/../../rails/transliteration/ru.rb:11 (lambda)>"
    }
  },
  "manager_bar": {
    "doctors": "Доктора",
    "patients": "Пациенты",
    "schedules": "Расписания",
    "visit_types": "Типы визитов",
    "visits": "Визиты"
  },
  "nav_bar": {
    "contacts": "Контакты",
    "departments": "Отделения",
    "log_in": "Войти",
    "log_out": "Выйти",
    "main": "Главная",
    "news": "Новости",
    "sign_up": "Регистрация"
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": " ",
        "format": "%n %u",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "руб."
      }
    },
    "format": {
      "delimiter": " ",
      "precision": 3,
      "separator": ",",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          /*
          "billion": {
            "few": "миллиардов",
            "many": "миллиардов",
            "one": "миллиард",
            "other": "миллиардов"
          },
          "million": {
            "few": "миллионов",
            "many": "миллионов",
            "one": "миллион",
            "other": "миллионов"
          },
          "quadrillion": {
            "few": "квадриллионов",
            "many": "квадриллионов",
            "one": "квадриллион",
            "other": "квадриллионов"
          },
          "thousand": {
            "few": "тысяч",
            "many": "тысяч",
            "one": "тысяча",
            "other": "тысяч"
          },
          "trillion": {
            "few": "триллионов",
            "many": "триллионов",
            "one": "триллион",
            "other": "триллионов"
          },
          */
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 1,
        "significant": false,
        "strip_insignificant_zeros": false
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "few": "байта",
            "many": "байт",
            "one": "байт",
            "other": "байта"
          },
          "eb": "ЭБ",
          "gb": "ГБ",
          "kb": "КБ",
          "mb": "МБ",
          "pb": "ПБ",
          "tb": "ТБ"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "records": {
    "back": "Назад",
    "delete": "Удалить",
    "edit": "Редактировать",
    "show": "Просмотреть"
  },
  "support": {
    "array": {
      "last_word_connector": " и ",
      "two_words_connector": " и ",
      "words_connector": ", "
    }
  },
  "time": {
    "am": "утра",
    "formats": {
      "default": "%a, %d %b %Y, %H:%M:%S %z",
      "long": "%d %B %Y, %H:%M",
      "short": "%d %b, %H:%M"
    },
    "pm": "вечера"
  },
  "visit_types": {
    "Check-up": "Осмотр",
    "Consultation": "Консультация"
  }
});
I18n.translations["uk"] = I18n.extend((I18n.translations["uk"] || {}), {
});
