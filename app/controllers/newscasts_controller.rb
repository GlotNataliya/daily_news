class NewscastsController < ApplicationController
  def index
    @newscasts = Newscast.all.order(created_at: :desc)
    respond_to do |format|
      format.html
      format.json { render json: NewscastSerializer.new(@newscasts).serializable_hash[:data], status: :ok }
    end
  end

  def show
    @newscast = Newscast.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: NewscastSerializer.new(@newscast).serializable_hash[:data], status: :ok }
    end
  end
end
