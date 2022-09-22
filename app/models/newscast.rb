class Newscast < ApplicationRecord
  mount_uploader :image, ImageUploader

  validates :title, presence: true
  validates :description, presence: true
  validates :image, presence: true
  # has_one_attached :image, dependent: :destroy

  # validates :image, presence: true, blob: { content_type: ['image/png', 'image/jpg'], size_range: 1..(5.megabytes) }
end
