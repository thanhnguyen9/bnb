module Api
  class ReservationsController < ApplicationController
    def create
      @reservation = current_user.reservations.new(reservation_params)
      if @reservation.try_booking
        render :show
      else
        render json: @reservation.errors.full_messages,
                     status: :unprocessable_entity
      end
    end

    def show
      @reservation = Reservation.find(params[:id])
      render :show
    end

    private

    def reservation_params
      params.require(:reservation).permit(:listing_id,
                                          :start_date,
                                          :end_date)
    end
  end
end
