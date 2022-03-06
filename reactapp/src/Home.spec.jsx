import React from "react";
import { Home } from './Home'
import { render } from '@testing-library/react'

describe("Home", () => {
  it("render correctly", () => {
    const { getByLabelText } = render (<Home />)

    expect(getByLabelText('Имя пользователя *')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Пароль *')).toHaveAttribute('name', 'password')
  })
})