import { Box, Text, styled } from '@ntn-ui/react'

export const ProfileBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
  },
})

export const FormAnnotation = styled(Text, {
  color: '$gray200',
})
