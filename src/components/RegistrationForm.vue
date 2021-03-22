<template>
    <form @submit.prevent="onForm">
      <div class="main-form" v-if="!reg">
        <h1>Форма создания клиента</h1>
        <div class="form-container">
          <h3>Личные данные</h3>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="name"
              type="text"
              v-model.trim="name"
              :class="{'invalid': ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.isName)}"
            >
            <label class="form-label" for="name">Имя*</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="surname"
              type="text"
              v-model.trim="surname"
              :class="{'invalid': ($v.surname.$dirty && !$v.surname.required) || ($v.surname.$dirty && !$v.surname.isName)}"
            >
            <label class="form-label" for="surname">Фамилия*</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="patronymic"
              type="text"
              v-model.trim="patronymic"
              :class="{'invalid': ($v.patronymic.$dirty && !$v.patronymic.isName)}"
            >
            <label class="form-label" for="patronymic">Отчество</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="date"
              type="date"
              v-model.trim="date"
              :class="{'invalid': ($v.date.$dirty && !$v.date.required)}"
            >
            <label class="form-label" for="patronymic">Дата</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="phone"
              type="number"
              v-model.trim="phone"
              :class="{'invalid': ($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.isPhone)}"
            >
            <label class="form-label" for="phone">Номер телефона</label>
          </div>
          <div class="input-field">
            <label>Пол*</label>
            М<input type="radio" name="gender" value="m" v-model="gender">
            Ж<input type="radio" name="gender" value="w" v-model="gender" >
          </div>
        </div>
        <div class="form-container">
          <h3>Адрес</h3>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="index"
              type="number"
              v-model.trim="index"
              :class="{'invalid': ($v.index.$dirty && !$v.index.isIndex)}"
            >
            <label class="form-label" for="index">Индекс</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="country"
              type="text"
              v-model.trim="country"
              :class="{'invalid': ($v.country.$dirty && !$v.country.isName)}"
            >
            <label class="form-label" for="country">Страна</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="region"
              type="text"
              v-model.trim="region"
              :class="{'invalid': ($v.region.$dirty && !$v.region.isName)}"
            >
            <label class="form-label" for="region">Регион</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="city"
              type="text"
              v-model.trim="city"
              :class="{'invalid': ($v.city.$dirty && !$v.city.required) || ($v.city.$dirty && !$v.city.isName)}"
            >
            <label class="form-label" for="city">Город*</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="street"
              type="text"
              v-model.trim="street"
            >
            <label class="form-label" for="street">Улица</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="house"
              type="text"
              v-model.trim="house"
            >
            <label class="form-label" for="house">Дом</label>
          </div>
        </div>
        <div class="form-container">
          <div class="input-field">
            <h3>Группа клиентов</h3>
            <div class="select">
              <div class="select-content">
                <input id="options-group0" class="select-input" type="checkbox" name="group" value="VIP" v-model="group" disabled />
                <label for="options-group0" class="select-label">VIP(вам недоступна)</label>
                <input id="options-group1" class="select-input" type="checkbox" name="group" value="problematic" v-model="group" />
                <label for="options-group1" class="select-label">Проблемные</label>
                <input id="options-group2" class="select-input" type="checkbox" name="group" value="OMS" v-model="group" />
                <label for="options-group2" class="select-label">ОМС</label>
              </div>
            </div>
            <h3>Лечащий врач</h3>
            <div class="select">
              <div class="select-content">
                <input id="options-doctor0" class="select-input" type="radio" name="doctor" value="Chernishova" v-model="doctor" />
                <label for="options-doctor0" class="select-label">Чернышева</label>
                <input id="options-doctor1" class="select-input" type="radio" name="doctor" value="Zaharov" v-model="doctor" disabled/>
                <label for="options-doctor1" class="select-label">Захаров(Отпуск)</label>
                <input id="options-doctor2" class="select-input" type="radio" name="doctor" value="Ivanov" v-model="doctor" />
                <label for="options-doctor2" class="select-label">Иванов</label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="input-field">
            <h3>Документ</h3>
            <div class="select">
              <div class="select-content">
                <input id="options-document0" class="select-input" type="radio" name="document" value="passport" v-model="document" />
                <label for="options-document0" class="select-label">Паспорт</label>
                <input id="options-document1" class="select-input" type="radio" name="document" value="birthCertificate" v-model="document" />
                <label for="options-document1" class="select-label">Свидетельство о рождении</label>
                <input id="options-document2" class="select-input" type="radio" name="document" value="driverLicense" v-model="document" />
                <label for="options-document2" class="select-label">Вод.удостоверение</label>
              </div>
            </div>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="document-series"
              type="text"
              v-model.trim="documentSeries"
              :class="{'invalid': ($v.documentSeries.$dirty && !$v.documentSeries.isDocumentSeries)}"
            >
            <label class="form-label" for="document-series">Серия</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="document-index"
              type="text"
              v-model.trim="documentIndex"
              :class="{'invalid': ($v.documentIndex.$dirty && !$v.documentIndex.isDocumentIndex)}"
            >
            <label class="form-label" for="document-index">Номер</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="document-issued"
              type="text"
              v-model.trim="documentIssued"
              :class="{'invalid': ($v.documentIssued.$dirty && !$v.documentIssued.required)}"
            >
            <label class="form-label" for="document-issued">Кем выдан*</label>
          </div>
          <div class="input-field">
            <input
              placeholder=" "
              class="form-input"
              id="document-date"
              type="date"
              v-model.trim="documentDate"
            >
            <label class="form-label" for="document-date">Дата выдачи*</label>
          </div>
        </div>
        <div class="submit-container">
          <div class="message-checkbox">
            <input id="message-checkbox" type="checkbox">
            <label for="message-checkbox">Выслать смс на телефон?</label>
          </div>
          <ul class="error-list">
              <li v-for="(error, idx) in errorList" :key="idx + 'errorList'"> {{ error }}</li>
          </ul>
          <div class="submit-button">
            <button class="form-button" type="message-checkbox">Подтвердить</button>
          </div>
        </div>
      </div>
      <div class="end-form" v-if="reg">
        <h1>Вы успешно зарегистрировались</h1>
        <a href="/https://remezzz.github.io/testForm.github.io/">Вернуться на главную страницу</a>
      </div>
    </form>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
import {isName, isPhone, isIndex, isDocumentSeries, isDocumentIndex} from './validators'

export default {
  name: 'RegistrationForm',

  data: () => ({
    title: 'Запись на прием',
    phone: '',
    name: '',
    surname: '',
    patronymic: '',
    gender: '',
    formList: {},
    group: [],
    doctor: [],
    city: '',
    index: '',
    country: '',
    region: '',
    street: '',
    house: '',
    date: '',
    document: '',
    documentSeries: '',
    documentIndex: '',
    documentDate: '',
    documentIssued: '',
    errorList: [],
    reg: false
  }),

  validations: {
    phone: {required, isPhone},
    name: {required, isName},
    surname: {required, isName},
    patronymic: {isName},
    gender: {required},
    group: {required},
    city: {required, isName},
    index: {isIndex},
    country: {isName},
    region: {isName},
    date: {required},
    document: {required},
    documentSeries: {isDocumentSeries},
    documentIndex: {isDocumentIndex},
    documentIssued: {required}
  },

  methods: {
    onForm() {

      this.errorList = []

      if (this.$v.$invalid) {

        this.$v.$touch()

        if (this.$v.name.$invalid) this.errorList.push('Введите корректное имя')
        if (this.$v.surname.$invalid) this.errorList.push('Введите корректную Фамилию')
        if (this.$v.patronymic.$invalid) this.errorList.push('Введите корректное Отчество')
        if (this.$v.date.$invalid) this.errorList.push('Укажите дату рождения')
        if (this.$v.phone.$invalid) this.errorList.push('Введите корректный телефон')
        if (this.$v.gender.$invalid) this.errorList.push('Выберите пол')
        if (this.$v.index.$invalid) this.errorList.push('Введен некорректный индекс')
        if (this.$v.country.$invalid) this.errorList.push('Введена некорректная страна')
        if (this.$v.region.$invalid) this.errorList.push('Введен некорректный регион')
        if (this.$v.city.$invalid) this.errorList.push('Введите корректный город')
        if (this.$v.group.$invalid) this.errorList.push('Выберите группу')
        if (this.$v.document.$invalid) this.errorList.push('Выберите тип документа')
        if (this.$v.documentIndex.$invalid) this.errorList.push('Неправильный номер документа')
        if (this.$v.documentSeries.$invalid) this.errorList.push('Некорректная серия документа')
        if (this.$v.documentIssued.$invalid) this.errorList.push('Укажите кем выдан документ')

        return
      }
      else {

        this.reg = true
      }
    }
  }
}
</script>

