class Note < ApplicationRecord
  belongs_to :book

  validates :content, presence: true
  validates :content, length: { maximum: 200 }
end
