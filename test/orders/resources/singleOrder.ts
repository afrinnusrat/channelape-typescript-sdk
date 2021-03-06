import Order from '../../../src/orders/model/Order';
import OrderStatus from '../../../src/orders/model/OrderStatus';

const singleOrder: Order = {
  additionalFields: [
    {
      name: 'closed_at',
      value: 'null'
    },
    {
      name: 'number',
      value: '1161251'
    },
    {
      name: 'token',
      value: '5d89:d8e9:291d:d91c:f106:74c9:d161:0bf3'
    },
    {
      name: 'taxes_included',
      value: 'false'
    },
    {
      name: 'financial_status',
      value: 'paid'
    },
    {
      name: 'total_discounts',
      value: '0.00'
    },
    {
      name: 'total_line_items_price',
      value: '25.98'
    },
    {
      name: 'cart_token',
      value: 'e554f7db08b90d0cfd365d82363ad4a2'
    },
    {
      name: 'buyer_accepts_marketing',
      value: 'true'
    },
    {
      name: 'name',
      value: '#G1162251'
    },
    {
      name: 'referring_site',
      value: 'susanna.biz'
    },
    {
      name: 'landing_site',
      value: 'kariane.com'
    },
    {
      name: 'cancelled_at',
      value: 'null'
    },
    {
      name: 'user_id',
      value: 'null'
    },
    {
      name: 'location_id',
      value: 'null'
    },
    {
      name: 'browser_ip',
      value: '38.134.125.90'
    },
    {
      name: 'order_number',
      value: '1162251'
    },
    {
      name: 'processing_method',
      value: 'direct'
    },
    {
      name: 'source_name',
      value: 'web'
    },
    {
      name: 'order_status_url',
      value: 'estella.biz'
    },
    {
      name: 'updated_at',
      value: '2018-03-29T13:06:31.000-06:00'
    },
    {
      name: 'note_attributes_OrderType',
      value: 'vel'
    },
    {
      name: 'risk_recommendation',
      value: 'accept'
    },
    {
      name: 'risk_message',
      value: 'Billing placed Shopify recommendation'
    },
    {
      name: 'risk_merchant_message',
      value: 'Billing was placed Shopify recommendation'
    }
  ],
  alphabeticCurrencyCode: 'USD',
  businessId: '4d688534-d82e-4111-940c-322ba9aec108',
  channelId: '0d134d16-ad7e-4724-841e-7d46e0f128bd',
  channelOrderId: '314980073478',
  createdAt: new Date('2018-05-03T18:07:58.009Z'),
  purchaseOrderNumber: '123456',
  customer: {
    additionalFields: [
      {
        name: 'id',
        value: '289747828742'
      },
      {
        name: 'accepts_marketing',
        value: 'true'
      },
      {
        name: 'orders_count',
        value: '1'
      },
      {
        name: 'total_spent',
        value: '31.93'
      },
      {
        name: 'state',
        value: 'disabled'
      }
    ],
    billingAddress: {
      additionalFields: [],
      address1: '04822 Stracke Shores',
      city: 'South Deanhaven',
      country: 'United States',
      countryCode: 'US',
      firstName: 'Rebekah',
      lastName: 'Little',
      name: 'Rebekah Little',
      postalCode: '66493',
      province: 'Kansas',
      provinceCode: 'KS'
    },
    email: 'Aurore.Purdy17@gmail.com',
    firstName: 'Rebekah',
    lastName: 'Little',
    shippingAddress: {
      additionalFields: [],
      address1: '04822 Stracke Shores',
      city: 'South Deanhaven',
      country: 'United States',
      countryCode: 'US',
      firstName: 'Rebekah',
      lastName: 'Little',
      name: 'Rebekah Little',
      postalCode: '66493',
      province: 'Kansas',
      provinceCode: 'KS'
    }
  },
  fulfillments: [],
  id: 'c0f45529-cbed-4e90-9a38-c208d409ef2a',
  lineItems: [
    {
      additionalFields: [
        {
          name: 'variant_id',
          value: '36581474886'
        },
        {
          name: 'title',
          value: 'Generic Steel Shirt'
        },
        {
          name: 'variant_title',
          value: 'Generic Steel Shirt'
        },
        {
          name: 'product_id',
          value: '9670311622'
        },
        {
          name: 'requires_shipping',
          value: 'true'
        },
        {
          name: 'taxable',
          value: 'true'
        },
        {
          name: 'gift_card',
          value: 'false'
        },
        {
          name: 'variant_inventory_management',
          value: 'shopify'
        },
        {
          name: 'fulfillable_quantity',
          value: '1'
        },
        {
          name: 'total_discount',
          value: '0.00'
        },
        {
          name: 'fulfillment_service',
          value: 'manual'
        }
      ],
      grams: 371,
      id: '646495567878',
      price: 12.99,
      quantity: 1,
      shippingMethod: 'Standard',
      sku: 'e67f1d90-824a-4941-8497-08d632763c93',
      title: 'Generic Steel Shirt',
      vendor: 'Ankunding - Corwin'
    },
    {
      additionalFields: [
        {
          name: 'variant_id',
          value: '42852035782'
        },
        {
          name: 'title',
          value: 'Tasty Steel Bacon'
        },
        {
          name: 'product_id',
          value: '10590339974'
        },
        {
          name: 'requires_shipping',
          value: 'true'
        },
        {
          name: 'taxable',
          value: 'true'
        },
        {
          name: 'gift_card',
          value: 'false'
        },
        {
          name: 'variant_inventory_management',
          value: 'shopify'
        },
        {
          name: 'fulfillable_quantity',
          value: '1'
        },
        {
          name: 'total_discount',
          value: '0.00'
        },
        {
          name: 'fulfillment_service',
          value: 'manual'
        }
      ],
      grams: 369,
      id: '646495600646',
      price: 12.99,
      quantity: 1,
      shippingMethod: 'Standard',
      sku: '27464759-a723-47bf-8d31-332cec285ead',
      title: 'Tasty Steel Bacon',
      vendor: 'Hand, Swift and Langosh'
    }
  ],
  purchasedAt: new Date('2018-03-29T19:06:26.000Z'),
  status: OrderStatus.OPEN,
  subtotalPrice: 25.98,
  totalGrams: 74,
  totalPrice: 31.93,
  totalShippingPrice: 5.95,
  totalTax: 0.00,
  updatedAt: new Date('2018-05-03T18:07:58.009Z')
};

export default singleOrder;
