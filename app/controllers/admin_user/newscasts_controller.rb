module AdminUser
  class NewscastsController < ApplicationController
    before_action :authenticate_admin!
    before_action :set_newscast, only: %i[ show edit update destroy ]

    # GET /newscasts or /newscasts.json
    def index
      @newscasts = Newscast.all.order(created_at: :desc)
    end

    # GET /newscasts/1 or /newscasts/1.json
    def show
    end

    # GET /newscasts/new
    def new
      @newscast = Newscast.new
    end

    # GET /newscasts/1/edit
    def edit
    end

    # POST /newscasts or /newscasts.json
    def create
      @newscast = Newscast.new(newscast_params)

      respond_to do |format|
        if @newscast.save
          format.html { redirect_to admin_user_newscasts_url(@newscasts), notice: "Newscast was successfully created." }
          format.json { render :show, status: :created, location: @newscast }
        else
          format.html { render :new, status: :unprocessable_entity }
          format.json { render json: @newscast.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /newscasts/1 or /newscasts/1.json
    def update
      respond_to do |format|
        if @newscast.update(newscast_params)
          format.html { redirect_to admin_user_newscast_url(@newscast), notice: "Newscast was successfully updated." }
          format.json { render :show, status: :ok, location: @newscast }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @newscast.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /newscasts/1 or /newscasts/1.json
    def destroy
      @newscast.destroy

      respond_to do |format|
        format.html { redirect_to admin_user_newscasts_url, notice: "Newscast was successfully destroyed." }
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_newscast
        @newscast = Newscast.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def newscast_params
        params.require(:newscast).permit(:title, :description, :image, :attachment)
      end
  end
end
