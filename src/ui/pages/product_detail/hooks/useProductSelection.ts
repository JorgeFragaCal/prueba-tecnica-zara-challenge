import { useState } from 'react'
import { Product } from '@/domain/models/interfaces'
import { Color, Storage } from '@/domain/models/value-objects'

export const useProductSelection = (product: Product) => {
  const [selectedStorage, setSelectedStorage] = useState<Storage | undefined>()
  const [selectedColor, setSelectedColor] = useState<Color | undefined>()

  const handleSelectColor = (color: string) => {
    setSelectedColor(
      product.colorOptions.find((option) => option.getHexCode() === color),
    )
  }

  const handleSelectStorage = (storage: string) => {
    setSelectedStorage(
      product.storageOptions.find((option) => option.getCapacity() === storage),
    )
  }

  return {
    selectedStorage,
    selectedColor,
    handleSelectColor,
    handleSelectStorage,
  }
}
