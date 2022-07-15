json.extract! newscast, :id, :title, :description, :image, :created_at, :updated_at
json.url newscast_url(newscast, format: :json)
