URL="$1"

JSON_DATA='{
  "order_id": 1122334455,
  "store_id": 111111,
  "order_feedback": {
    "rating": 5,
    "comment": "بهترین کیفیت در جردن"
  },
  "delivery_feedback": {
    "rating": 2,
    "comment": "غذا نیاز به گرم کردن مجدد داشت"
  }
}'

# Execute the curl command
for i in {1..6000}; do
    curl --location "$URL" \
    --header 'Content-Type: application/json' \
    --data "$JSON_DATA"
done
