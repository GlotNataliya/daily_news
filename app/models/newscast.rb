class Newscast < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true

  has_one_attached :image

  validates :image, presence: true, blob: { content_type: ['image/png', 'image/jpg'], size_range: 1..(5.megabytes) }
end
