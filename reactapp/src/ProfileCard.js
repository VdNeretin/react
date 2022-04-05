import React from 'react'
import PropTtypes from 'prop-types'
import { Button, Card, InputLabel, Input } from '@material-ui/core'

export const ProfileCard = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(
      e.target.number.value,
      e.target.name.value,
      e.targer.date.value,
      e.target.cvc.value,
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Card>
        <InputLabel htmlFor='number'>Номер карты *</InputLabel>
        <Input 
        id='number'
        type='text'
        name='number'
        placeholder='0000 0000 0000 0000'
        required
        />
        <InputLabel htmlFor='date'>Срок действия *</InputLabel>
        <Input 
        id='date'
        type='text'
        name='date'
        placeholder='MM/YY'
        required
        />
        </Card>
        <Card>
        <InputLabel htmlFor='name'>Имя владельца *</InputLabel>
        <Input 
        id='name'
        type='text'
        name='name'
        placeholder='USER NAME'
        required
        />
        <InputLabel htmlFor='cvc'>CVC *</InputLabel>
        <Input 
        id='cvc'
        type='text'
        name='cvc'
        placeholder='CVC'
        required
        />
        </Card>
      </div>
      <Button type='submit' variant='containde' color='primary'>Схранить</Button>
    </form>
  )
}

ProfileCard.propTypes = {
  handleSubmit: PropTtypes.func
}

ProfileCard.defaultProps = {
  handleSubmit: () => {}
}

export default ProfileCard