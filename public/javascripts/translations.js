I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"account":{"are_you_sure":"Are you sure?","current_password":"Current password","delete_account":"I want to delete my account","doctor_profile":"Doctor profile","edit_account":"Edit account","leave_blank":"leave blank if you don't want to change it","my_schedules":"My schedules","my_visits":"My visits","need_password":"we need your current password to confirm your changes","not_saved":"User account was not created:","patient_card":"Patient card","update":"Update","waiting_confirmation":"Currently waiting confirmation for"},"activerecord":{"attributes":{"schedules":{"create_schedule":"Save schedule","day":"Day","doctor":"Doctor","edit_schedule":"Editing schedule","end_date":"End date","end_time":"End time","new_schedule":"New schedule","no_schedules_message":"You don't have schedules right now","schedules":"Schedules","start_date":"Start date","start_time":"Start time","visit_type":"Visit type"},"users":{"email":"Email","is_active":"Is active","name":"Name","password":"Password","password_confirmation":"Password confirmation","phone_number":"Phone number","registration_date":"Registration date","role":"Role","surname":"Surname"},"visit_types":{"create_visit_type":"Save visit type","description":"Description","duration":"Duration","edit_visit_type":"Editing visit type","minutes":"minutes","name":"Name","new_visit_type":"New visit type","visit_types":"Visit types"},"visits":{"create_visit":"Create visit","date":"Date","doctor":"Doctor","new_visit":"New visit","no_visits_message":"You don't have visits right now","patient":"Patient","time":"Time","visit_type":"Visit type","visits":"Visits"}},"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"x_years":{"one":"1 year","other":"%{count} years"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Second","year":"Year"}},"days":{"friday":"Friday","monday":"Monday","saturday":"Saturday","sunday":"Sunday","thursday":"Thursday","tuesday":"Tuesday","wednesday":"Wednesday"},"devise":{"change_password":"Change my password","change_password_error":"Password was not changed:","characters_minimum":"characters minimum","confirm_new_password":"Confirm new password","confirmations":{"confirmed":"Your email address has been successfully confirmed.","send_instructions":"You will receive an email with instructions for how to confirm your email address in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."},"dnr_confirmation":"Didn't receive confirmation instructions?","failure":{"already_authenticated":"You are already signed in.","inactive":"Your account is not activated yet.","invalid":"Invalid %{authentication_keys} or password.","last_attempt":"You have one more attempt before your account is locked.","locked":"Your account is locked.","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"Your session expired. Please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your email address before continuing."},"forgot_password":"Forgot your password?","mailer":{"confirmation_instructions":{"subject":"Confirmation instructions"},"email_changed":{"subject":"Email Changed"},"password_change":{"subject":"Password Changed"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock instructions"}},"new_password":"New password","omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","success":"Successfully authenticated from %{kind} account."},"passwords":{"no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.","send_instructions":"You will receive an email with instructions on how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password has been changed successfully. You are now signed in.","updated_not_active":"Your password has been changed successfully."},"registrations":{"destroyed":"Bye! Your account has been successfully cancelled. We hope to see you again soon.","signed_up":"Welcome! You have signed up successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirmation link to confirm your new email address.","updated":"Your account has been updated successfully.","updated_but_not_signed_in":"Your account has been updated successfully, but since your password was changed, you need to sign in again"},"remember_me":"Remember me","resend_ci":"Resend confirmation instructions","reset_password_error":"Instruction was not sent:","send_me_rpi":"Send me reset password instruction","sessions":{"already_signed_out":"Signed out successfully.","signed_in":"Signed in successfully.","signed_out":"Signed out successfully."},"unlocks":{"send_instructions":"You will receive an email with instructions for how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","already_confirmed":"was already confirmed, please try signing in","blank":"can't be blank","confirmation":"doesn't match %{attribute}","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","expired":"has expired, please request a new one","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","not_found":"not found","not_locked":"was not locked","not_saved":{"one":"1 error prohibited this %{resource} from being saved:","other":"%{count} errors prohibited this %{resource} from being saved:"},"odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"flash":{"actions":{"create":{"notice":"%{resource_name} was successfully created."},"destroy":{"alert":"%{resource_name} could not be destroyed.","notice":"%{resource_name} was successfully destroyed."},"update":{"notice":"%{resource_name} was successfully updated."}}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"i18n":{"plural":{"keys":["one","other"],"rule":{}}},"manager_bar":{"doctors":"Doctors","patients":"Patients","schedules":"Schedules","visit_types":"Visit types","visits":"Visits"},"nav_bar":{"contacts":"Contacts","departments":"Departments","log_in":"Log In","log_out":"Log Out","main":"Home","news":"News","sign_up":"Sign Up"},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"nth":{"ordinalized":{},"ordinals":{}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"records":{"back":"Back","delete":"Delete","edit":"Edit","show":"Show"},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"visit_types":{"Check-up":"Check-up","Consultation":"Consultation"}});
I18n.translations["ru"] = I18n.extend((I18n.translations["ru"] || {}), {"account":{"are_you_sure":"Вы уверенны?","current_password":"Текущий пароль","delete_account":"Я хочу удалить учетную запись","doctor_profile":"Профиль доктора","edit_account":"Редактировать учетную запись","leave_blank":"оставте пустым, если не хотите изменять","my_schedules":"Мои расписания","my_visits":"Мои визиты","need_password":"введите текущий пароль, чтобы подтвердить изменения","not_saved":"Учетная запись не была создана:","patient_card":"Карточка пациента","update":"Обновить","waiting_confirmation":"Ожидается подтверждение для"},"activerecord":{"attributes":{"schedules":{"create_schedule":"Сохранить расписание","day":"День","doctor":"Доктор","edit_schedule":"Редактирование расписания","end_date":"Дата конца","end_time":"Время конца","new_schedule":"Новое расписание","no_schedules_message":"У Вас еще нет расписаний","schedules":"Расписания","start_date":"Дата начала","start_time":"Время начала","visit_type":"Тип визита"},"users":{"email":"Электронная почта","is_active":"Активный","name":"Имя","password":"Пароль","password_confirmation":"Подтверждение пароля","phone_number":"Номер телефона","registration_date":"Дата регистрации","role":"Роль","surname":"Фамилия"},"visit_types":{"create_visit_type":"Сохранить тип визита","description":"Описание","duration":"Продолжительность","edit_visit_type":"Редактирование типа визита","minutes":"минут","name":"Название","new_visit_type":"Новый тип визита","visit_types":"Типы визитов"},"visits":{"create_visit":"Создать визит","date":"Дата","doctor":"Доктор","new_visit":"Новый визит","no_visits_message":"У Вас еще нет визитов","patient":"Пациент","time":"Время","visit_type":"Тип визита","visits":"Визиты"}},"errors":{"messages":{"record_invalid":"Возникли ошибки: %{errors}","restrict_dependent_destroy":{"has_many":"Невозможно удалить запись, так как существуют зависимости: %{record}","has_one":"Невозможно удалить запись, так как существует зависимость: %{record}"}}}},"date":{"abbr_day_names":["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],"abbr_month_names":[null,"янв.","февр.","марта","апр.","мая","июня","июля","авг.","сент.","окт.","нояб.","дек."],"day_names":["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],"formats":{"default":"%d.%m.%Y","long":"%-d %B %Y","short":"%-d %b"},"month_names":[null,"января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"few":"около %{count} часов","many":"около %{count} часов","one":"около %{count} часа","other":"около %{count} часа"},"about_x_months":{"few":"около %{count} месяцев","many":"около %{count} месяцев","one":"около %{count} месяца","other":"около %{count} месяца"},"about_x_years":{"few":"около %{count} лет","many":"около %{count} лет","one":"около %{count} года","other":"около %{count} лет"},"almost_x_years":{"few":"почти %{count} года","many":"почти %{count} лет","one":"почти 1 год","other":"почти %{count} лет"},"half_a_minute":"полминуты","less_than_x_minutes":{"few":"меньше %{count} минут","many":"меньше %{count} минут","one":"меньше %{count} минуты","other":"меньше %{count} минуты"},"less_than_x_seconds":{"few":"меньше %{count} секунд","many":"меньше %{count} секунд","one":"меньше %{count} секунды","other":"меньше %{count} секунды"},"over_x_years":{"few":"больше %{count} лет","many":"больше %{count} лет","one":"больше %{count} года","other":"больше %{count} лет"},"x_days":{"few":"%{count} дня","many":"%{count} дней","one":"%{count} день","other":"%{count} дня"},"x_minutes":{"few":"%{count} минуты","many":"%{count} минут","one":"%{count} минуту","other":"%{count} минуты"},"x_months":{"few":"%{count} месяца","many":"%{count} месяцев","one":"%{count} месяц","other":"%{count} месяца"},"x_seconds":{"few":"%{count} секунды","many":"%{count} секунд","one":"%{count} секунду","other":"%{count} секунды"},"x_years":{"few":"%{count} года","many":"%{count} лет","one":"%{count} год","other":"%{count} года"}},"prompts":{"day":"День","hour":"Часов","minute":"Минут","month":"Месяц","second":"Секунд","year":"Год"}},"days":{"friday":"Пятница","monday":"Понедельник","saturday":"Суббота","sunday":"Воскресенье","thursday":"Четверг","tuesday":"Вторник","wednesday":"Среда"},"devise":{"change_password":"Сменить пароль","change_password_error":"Пароль не был изменен:","characters_minimum":"символов минимум","confirm_new_password":"Подтвердите новый пароль","confirmations":{"confirmed":"Ваша учётная запись успешно подтверждена.","send_instructions":"В течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи.","send_paranoid_instructions":"Если ваш адрес email есть в нашей базе данных, то в течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи."},"dnr_confirmation":"Не пришло подтверждение?","failure":{"already_authenticated":"Вы уже вошли в систему.","inactive":"Ваша учётная запись ещё не активирована.","invalid":"Неверный %{authentication_keys} или пароль.","last_attempt":"У Вас осталась еще одна попытка ввести пароль до блокировки.","locked":"Ваша учётная запись заблокирована.","not_found_in_database":"Неверный %{authentication_keys} или пароль.","timeout":"Ваш сеанс закончился. Пожалуйста, войдите в систему снова.","unauthenticated":"Вам необходимо войти в систему или зарегистрироваться.","unconfirmed":"Вы должны подтвердить вашу учётную запись."},"forgot_password":"Забыли пароль?","mailer":{"confirmation_instructions":{"subject":"Инструкции по подтверждению учётной записи."},"email_changed":{"subject":"Еmail адрес был изменён."},"password_change":{"subject":"Пароль был изменён."},"reset_password_instructions":{"subject":"Инструкции по восстановлению пароля."},"unlock_instructions":{"subject":"Инструкции по разблокировке учётной записи."}},"new_password":"Новый пароль","omniauth_callbacks":{"failure":"Вы не можете войти в систему с учётной записью из %{kind}, так как \"%{reason}\".","success":"Вход в систему выполнен с учётной записью из %{kind}."},"passwords":{"no_token":"Эта страница доступна только при переходе с email для сброса пароля. Если Вы перешли по ссылке из письма, пожалуйста, убедитесь, что вы использовали полный URL.","send_instructions":"В течение нескольких минут вы получите письмо с инструкциями по восстановлению вашего пароля.","send_paranoid_instructions":"Если ваш адрес email есть в нашей базе данных, то в течение нескольких минут Вы получите письмо с инструкциями по восстановлению вашего пароля.","updated":"Ваш пароль успешно изменён. Теперь вы вошли в систему.","updated_not_active":"Пароль успешно изменён."},"registrations":{"destroyed":"До свидания! Ваша учётная запись успешно удалена. Надеемся снова увидеть вас.","signed_up":"Добро пожаловать! Вы успешно зарегистрировались.","signed_up_but_inactive":"Вы успешно зарегистрировались. Тем не менее, вы не можете войти, потому что ваша учетная запись ещё не активирована.","signed_up_but_locked":"Вы успешно зарегистрировались. Тем не менее, вы не можете войти, потому что ваша учетная запись заблокирована.","signed_up_but_unconfirmed":"В течение нескольких минут вы получите письмо с инструкциями по подтверждению вашей учётной записи.","update_needs_confirmation":"Ваш аккаунт успешно обновлен, нонеобходимо подтвердить Ваш новый адрес email. Пожалуйста, проверьте свою электронную почту и нажмите на ссылку \"Подтвердить\", чтобы завершить обновления email.","updated":"Ваша учётная запись успешно изменена.","updated_but_not_signed_in":"Ваш аккаунт успешно изменен, но так как ваш пароль изменился, нужно войти снова."},"remember_me":"Запомнить меня","resend_ci":"Повторно отправить подтверждение регистрации","reset_password_error":"Инструкция не была отправлена:","send_me_rpi":"Отправить инструкцию для восстановления пароля","sessions":{"already_signed_out":"Выход из системы выполнен.","signed_in":"Вход в систему выполнен.","signed_out":"Выход из системы выполнен."},"unlocks":{"send_instructions":"В течение нескольких минут вы получите письмо с инструкциями по разблокировке вашей учётной записи.","send_paranoid_instructions":"Если ваша учётная запись существует, то в течение нескольких минут вы получите письмо с инструкциями по её разблокировке.","unlocked":"Ваша учётная запись разблокирована. Теперь вы вошли в систему."}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"нужно подтвердить","already_confirmed":"уже подтверждена. Пожалуйста, попробуйте войти в систему","blank":"не может быть пустым","confirmation":"не совпадает со значением поля %{attribute}","confirmation_period_expired":"должен быть подтвержден в течении %{period}, пожалуйста, запросите подтверждение ещё раз","empty":"не может быть пустым","equal_to":"может иметь лишь значение, равное %{count}","even":"может иметь лишь четное значение","exclusion":"имеет зарезервированное значение","expired":"устарела. Пожалуйста, запросите новую","greater_than":"может иметь значение большее %{count}","greater_than_or_equal_to":"может иметь значение большее или равное %{count}","inclusion":"имеет непредусмотренное значение","invalid":"имеет неверное значение","less_than":"может иметь значение меньшее чем %{count}","less_than_or_equal_to":"может иметь значение меньшее или равное %{count}","model_invalid":"Возникли ошибки: %{errors}","not_a_number":"не является числом","not_an_integer":"не является целым числом","not_found":"не найдена","not_locked":"не заблокирована","not_saved":{"few":"%{resource}: сохранение не удалось из-за %{count} ошибок","many":"%{resource}: сохранение не удалось из-за %{count} ошибок","one":"%{resource}: сохранение не удалось из-за %{count} ошибки","other":"%{resource}: сохранение не удалось из-за %{count} ошибки"},"odd":"может иметь лишь нечетное значение","other_than":"должно отличаться от %{count}","present":"нужно оставить пустым","required":"не может отсутствовать","taken":"уже существует","too_long":{"few":"слишком большой длины (не может быть больше чем %{count} символа)","many":"слишком большой длины (не может быть больше чем %{count} символов)","one":"слишком большой длины (не может быть больше чем %{count} символ)","other":"слишком большой длины (не может быть больше чем %{count} символа)"},"too_short":{"few":"недостаточной длины (не может быть меньше %{count} символов)","many":"недостаточной длины (не может быть меньше %{count} символов)","one":"недостаточной длины (не может быть меньше %{count} символа)","other":"недостаточной длины (не может быть меньше %{count} символа)"},"wrong_length":{"few":"неверной длины (может быть длиной ровно %{count} символа)","many":"неверной длины (может быть длиной ровно %{count} символов)","one":"неверной длины (может быть длиной ровно %{count} символ)","other":"неверной длины (может быть длиной ровно %{count} символа)"}},"template":{"body":"Проблемы возникли со следующими полями:","header":{"few":"%{model}: сохранение не удалось из-за %{count} ошибок","many":"%{model}: сохранение не удалось из-за %{count} ошибок","one":"%{model}: сохранение не удалось из-за %{count} ошибки","other":"%{model}: сохранение не удалось из-за %{count} ошибки"}}},"helpers":{"select":{"prompt":"Выберите: "},"submit":{"create":"Создать %{model}","submit":"Сохранить %{model}","update":"Сохранить %{model}"}},"i18n":{"plural":{"keys":["one","few","many","other"],"rule":{}},"transliterate":{"rule":{}}},"manager_bar":{"doctors":"Доктора","patients":"Пациенты","schedules":"Расписания","visit_types":"Типы визитов","visits":"Визиты"},"nav_bar":{"contacts":"Контакты","departments":"Отделения","log_in":"Войти","log_out":"Выйти","main":"Главная","news":"Новости","sign_up":"Регистрация"},"number":{"currency":{"format":{"delimiter":" ","format":"%n %u","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"руб."}},"format":{"delimiter":" ","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":{"few":"миллиардов","many":"миллиардов","one":"миллиард","other":"миллиардов"},"million":{"few":"миллионов","many":"миллионов","one":"миллион","other":"миллионов"},"quadrillion":{"few":"квадриллионов","many":"квадриллионов","one":"квадриллион","other":"квадриллионов"},"thousand":{"few":"тысяч","many":"тысяч","one":"тысяча","other":"тысяч"},"trillion":{"few":"триллионов","many":"триллионов","one":"триллион","other":"триллионов"},"unit":""}},"format":{"delimiter":"","precision":1,"significant":false,"strip_insignificant_zeros":false},"storage_units":{"format":"%n %u","units":{"byte":{"few":"байта","many":"байт","one":"байт","other":"байта"},"eb":"ЭБ","gb":"ГБ","kb":"КБ","mb":"МБ","pb":"ПБ","tb":"ТБ"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"records":{"back":"Назад","delete":"Удалить","edit":"Редактировать","show":"Просмотреть"},"support":{"array":{"last_word_connector":" и ","two_words_connector":" и ","words_connector":", "}},"time":{"am":"утра","formats":{"default":"%a, %d %b %Y, %H:%M:%S %z","long":"%d %B %Y, %H:%M","short":"%d %b, %H:%M"},"pm":"вечера"},"visit_types":{"Check-up":"Осмотр","Consultation":"Консультация"}});
I18n.translations["uk"] = I18n.extend((I18n.translations["uk"] || {}), {"account":{"are_you_sure":"Ви впевнені?","current_password":"Поточний пароль","delete_account":"Я хочу видатили обліковий запис","doctor_profile":"Профіль лікаря","edit_account":"Редагувати обліковий запис","leave_blank":"залиште вільним, якщо не хочете змінювати","my_schedules":"Мої розклади","my_visits":"Мої візити","need_password":"введіть поточний пароль, щоб підтвердити зміни","not_saved":"Обліковий запис не був створений:","patient_card":"Карточка пацієнта","update":"Оновити","waiting_confirmation":"Очікується підтвердження для"},"activerecord":{"attributes":{"schedules":{"create_schedule":"Зберегти розклад","day":"День","doctor":"Лікар","edit_schedule":"Редагування розкладу","end_date":"Дата кінця","end_time":"Час кінця","new_schedule":"Новий розклад","no_schedules_message":"У Вас ще немає розкладів","schedules":"Розклади","start_date":"Дата початку","start_time":"Час початку","visit_type":"Тип візиту"},"users":{"email":"Електронна скринька","is_active":"Активний","name":"Ім'я","password":"Пароль","password_confirmation":"Підтвердження пароля","phone_number":"Номер телефону","registration_date":"Дата реєстрації","role":"Роль","surname":"Прізвище"},"visit_types":{"create_visit_type":"Зберегти тип візиту","description":"Опис","duration":"Тривалість","edit_visit_type":"Редагування типу візиту","minutes":"хвилин","name":"Назва","new_visit_type":"Новий тип візиту","visit_types":"Типи візитів"},"visits":{"create_visit":"Створити візит","date":"Дата","doctor":"Лікар","new_visit":"Новий візит","no_visits_message":"У Вас ще немає візитів","patient":"Пацієнт","time":"Час","visit_type":"Тип візиту","visits":"Візити"}},"errors":{"messages":{"record_invalid":"Виникли помилки: %{errors}","restrict_dependent_destroy":{"has_many":"Неможливо видалити запис, так як існують залежності: %{record}","has_one":"Неможливо видалити запис, так як існує залежність: %{record}"}}}},"date":{"abbr_day_names":["нд.","пн.","вт.","ср.","чт.","пт.","сб."],"abbr_month_names":[null,"січ.","лют.","бер.","квіт.","трав.","черв.","лип.","серп.","вер.","жовт.","лист.","груд."],"day_names":["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"],"formats":{"default":"%d.%m.%Y","long":"%d %B %Y","short":"%d %b"},"month_names":[null,"Січня","Лютого","Березня","Квітня","Травня","Червня","Липня","Серпня","Вересня","Жовтня","Листопада","Грудня"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"few":"близько %{count} години","many":"близько %{count} годин","one":"близько %{count} година","other":"близько %{count} години"},"about_x_months":{"few":"близько %{count} місяців","many":"близько %{count} місяців","one":"близько %{count} місяця","other":"близько %{count} місяця"},"about_x_years":{"few":"близько %{count} років","many":"близько %{count} років","one":"близько %{count} року","other":"близько %{count} року"},"almost_x_years":{"few":"майже %{count} років","many":"майже %{count} років","one":"майже %{count} роки","other":"майже %{count} років"},"half_a_minute":"пів хвилини","less_than_x_minutes":{"few":"менше %{count} хвилин","many":"менше %{count} хвилин","one":"менше %{count} хвилини","other":"менше %{count} хвилини"},"less_than_x_seconds":{"few":"менше %{count} секунд","many":"менше %{count} секунд","one":"менше %{count} секунди","other":"менше %{count} секунди"},"over_x_years":{"few":"більше %{count} років","many":"більше %{count} років","one":"більше %{count} року","other":"більше %{count} року"},"x_days":{"few":"%{count} дні","many":"%{count} днів","one":"%{count} день","other":"%{count} дня"},"x_minutes":{"few":"%{count} хвилини","many":"%{count} хвилин","one":"%{count} хвилина","other":"%{count} хвилини"},"x_months":{"few":"%{count} місяці","many":"%{count} місяців","one":"%{count} місяць","other":"%{count} місяця"},"x_seconds":{"few":"%{count} секунди","many":"%{count} секунд","one":"%{count} секунда","other":"%{count} секунди"},"x_years":{"few":"%{count} роки","many":"%{count} років","one":"%{count} рік","other":"%{count} року"}},"prompts":{"day":"День","hour":"Година","minute":"Хвилина","month":"Місяць","second":"Секунда","year":"Рік"}},"days":{"friday":"П'ятниця","monday":"Понеділок","saturday":"Субота","sunday":"Неділя","thursday":"Четвер","tuesday":"Вівторок","wednesday":"Середа"},"devise":{"change_password":"Змінити пароль","change_password_error":"Пароль не був змінений:","characters_minimum":"символів мінімум","confirm_new_password":"Підтвердіть новий пароль","confirmations":{"confirmed":"Ваш обліковий запис було успішно підтверджено.","send_instructions":"На Ваш email надіслано інструкції з підтвердження облікового запису.","send_paranoid_instructions":"Якщо Ваш email існує у нашій базі даних, Вам надіслано інструкції з підтвердження облікового запису."},"dnr_confirmation":"Не отримали підтвердження?","failure":{"already_authenticated":"Ви вже увійшли.","inactive":"Ваш обліковий запис ще не було активовано.","invalid":"Невірний %{authentication_keys} або пароль.","last_attempt":"У вас є ще одна спроба, перш ніж ваш обліковий запис буде заблокований.","locked":"Ваш обліковий запис заблоковано.","not_found_in_database":"Невірний %{authentication_keys} або пароль.","timeout":"Час вашої сесії вичерпано. Увійдіть знову для продовження, будь ласка.","unauthenticated":"Ви маєте увійти або зареєструватися.","unconfirmed":"Ви маєте підтвердити Ваш обліковий запис, перш ніж продовжити."},"forgot_password":"Забули пароль?","mailer":{"confirmation_instructions":{"subject":"Інструкції з підтвердження облікового запису."},"password_change":{"subject":"Пароль був змінений."},"reset_password_instructions":{"subject":"Інструкції з відновлення пароля."},"unlock_instructions":{"subject":"Інструкції з розблокування облікового запису"}},"new_password":"Новий пароль","omniauth_callbacks":{"failure":"Неможливо увійти з облікового запису %{kind} через те, що обліковий запис \"%{reason}\".","success":"Вхід успішний з облікового запису %{kind}."},"passwords":{"no_token":"Ця сторінка доступна тільки при переході з email для скидання пароля. Якщо Ви перейшли з листа, будь ласка, переконайтеся, що ви використовували повний URL.","send_instructions":"Ви отримаєте інструкції зі скидання паролю через декілька хвилин.","send_paranoid_instructions":"Ваш email існує у нашій базі даних, Вам надіслано посилання для відновлення вашого паролю.","updated":"Ваш пароль було успішно змінено.","updated_not_active":"Ваш пароль було успішно змінено."},"registrations":{"destroyed":"До побачення! Ваш обліковий запис було успішно закрито. Сподіваємось незабаром побачитись з Вами знову.","signed_up":"Вітаємо! Ви успішно зареєструвалися.","signed_up_but_inactive":"Ви успішно зареєструвалися. Тим не менш, ви не можете увійти, тому що ваш обліковий запис ще не активовано.","signed_up_but_locked":"Ви успішно зареєструвалися. Тим не менш, ви не можете увійти, тому що ваш обліковий запис заблокований.","signed_up_but_unconfirmed":"Протягом декількох хвилин ви отримаєте лист з інструкціями з підтвердження вашого облікового запису.","update_needs_confirmation":"Ваш аккаунт успішно оновлений, необходімо підтвердити Вашу нову email адресу. Будь ласка, перевірте свою електронну пошту і натисніть на лінк \"Підтвердити\", щоб завершити оновлення email.","updated":"Ви успішно оновили свій обліковий запис."},"remember_me":"Запам'ятати мене","resend_ci":"Повторно надіслати підтвердження раєстрації","reset_password_error":"Інструкція не була відправлена:","send_me_rpi":"Надіслати інструкцію для відновлення паролю","sessions":{"already_signed_out":"Вихід успішний.","signed_in":"Вхід успішний.","signed_out":"Вихід успішний."},"unlocks":{"send_instructions":"Протягом декількох хвилин на Ваш email буде надіслано інструкції з розблокування облікового запису.","send_paranoid_instructions":"Якщо ваш обліковий запис існує, то ви отримаєте повідомлення електронної пошти з інструкціями, як розблокувати його протягом декількох хвилин.","unlocked":"Ваш обліковий запис було успішно розблоковано."}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"має бути прийнятий","already_confirmed":"вже було підтверджено, спробуйте увійти","blank":"не може бути пустим","confirmation":"не збігається з підтвердженням","confirmation_period_expired":"повинен бути підтверджений протягом періоду %{period}, будь ласка, запитайте підтвердження ще раз","empty":"не може бути порожнім","equal_to":"має дорівнювати %{count}","even":"має бути парним","exclusion":"зарезервовано","expired":"прострочено, створіть новий","greater_than":"має бути більше ніж %{count}","greater_than_or_equal_to":"має бути більше ніж або дорівнювати %{count}","inclusion":"не включено до переліку","invalid":"недійсний","less_than":"має бути менше ніж %{count}","less_than_or_equal_to":"має бути менше ніж або дорівнювати %{count}","model_invalid":"Виникли помилки: %{errors}","not_a_number":"не число","not_an_integer":"не є цілим числом","not_found":"не знайдено","not_locked":"не було заблоковано","not_saved":{"one":"%{resource}: Виникла помилка (загалом - %{count}), через яку неможливо зберегти зміни.","other":"%{resource}: Виникли помилки (загалом - %{count}), через які неможливо зберегти зміни."},"odd":"має бути непарним","other_than":"має відрізнятись від %{count}","present":"має бути пустим","required":"не може бути порожнім","taken":"вже зайнятий","too_long":{"few":"занадто довгий (максимум %{count} знаки)","many":"занадто довгий (максимум %{count} знаків)","one":"занадто довгий (максимум %{count} знак)","other":"занадто довгий (максимум %{count} знаку)"},"too_short":{"few":"занадто короткий (мінімум %{count} знаки)","many":"занадто короткий (мінімум %{count} знаків)","one":"занадто короткий (мінімум %{count} знак)","other":"занадто короткий (мінімум %{count} знаку)"},"wrong_length":{"few":"неправильна довжина (має бути %{count} знаки)","many":"неправильна довжина (має бути %{count} знаків)","one":"неправильна довжина (має бути %{count} знак)","other":"неправильна довжина (має бути %{count} знаку)"}},"template":{"body":"Помилки виявлено в таких полях:","header":{"few":"%{model} не збережено через %{count} помилки","many":"%{model} не збережено через %{count} помилок","one":"%{model} не збережено через %{count} помилку","other":"%{model} не збережено через %{count} помилки"}}},"helpers":{"select":{"prompt":"Оберіть: "},"submit":{"create":"Створити %{model}","submit":"Зберегти %{model}","update":"Зберегти %{model}"}},"i18n":{"plural":{"keys":["one","few","many","other"],"rule":{}},"transliterate":{"rule":{}}},"manager_bar":{"doctors":"Лікарі","patients":"Пацієнти","schedules":"Розклади","visit_types":"Типи візитів","visits":"Візити"},"nav_bar":{"contacts":"Контакти","departments":"Відділення","log_in":"Увійти","log_out":"Вийти","main":"Головна","news":"Новини","sign_up":"Реєстрація"},"number":{"currency":{"format":{"delimiter":" ","format":"%n %u","precision":2,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"грн."}},"format":{"delimiter":" ","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":{"few":"Мільярдів","many":"Мільярдів","one":"Мільярд","other":"Мільярдів"},"million":{"few":"Мільйонів","many":"Мільйонів","one":"Мільйон","other":"Мільйонів"},"quadrillion":{"few":"Квадрильйонів","many":"Квадрильйонів","one":"Квадрильйон","other":"Квадрильйонів"},"thousand":{"few":"Тисяч","many":"Тисяч","one":"Тисяча","other":"Тисяч"},"trillion":{"few":"Трильйонів","many":"Трильйонів","one":"Трильйон","other":"Трильйонів"},"unit":""}},"format":{"delimiter":"","precision":1,"significant":false,"strip_insignificant_zeros":false},"storage_units":{"format":"%n %u","units":{"byte":{"few":"байти","many":"байтів","one":"байт","other":"байту"},"gb":"ГБ","kb":"кБ","mb":"МБ","tb":"ТБ"}}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}}},"records":{"back":"Назад","delete":"Видалити","edit":"Редагувати","show":"Переглянути"},"support":{"array":{"last_word_connector":" та ","two_words_connector":" і ","words_connector":", "}},"time":{"am":"до полудня","formats":{"default":"%a, %d %b %Y, %H:%M:%S %z","long":"%d %B %Y, %H:%M","short":"%d %b, %H:%M"},"pm":"по полудні"},"visit_types":{"Check-up":"Огляд","Consultation":"Консультація"}});
