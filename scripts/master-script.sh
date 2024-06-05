#!/bin/bash

# TODO: edit the line below according to your requirements
URL="http://localhost:8080/reviews"

./fill-reviews-1.sh "$URL" &
./fill-reviews-2.sh "$URL" &
./fill-reviews-3.sh "$URL" &