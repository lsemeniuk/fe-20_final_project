export const replace = num => {
  const str = num.toString();
  return str.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1 `);
};

export const calculateTotalPrice = cart => {
  let totalPrice = 0;
  if (cart === null) {
    cart?.products.map(p => {
      totalPrice += p.cartQuantity * p.currentPrice;
      return totalPrice;
    });
  }

  return replace(totalPrice);
};

export const getDate = date => {
  const optionsDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const dateStr = new Date(date).toLocaleString('ru', optionsDate);
  return dateStr;
};

export const generateLetterHtml = (cart, values, logoSrc, url, totalPrice) => {
  const logo = `<a href="${url}" target="_blank" style="padding-bottom:10px;">
  <img src="${logoSrc}" width="200" height="60" alt="logo"></a>`;

  const greeting = `<div style="font-size:14px;padding-bottom:15px;font-family:Arial, sans-serif;">
  Здравствуйте, ${values.firstName} ${values.lastName}!</div>`;

  const ordersTitle = `<div style="font-size:18px;padding-bottom:15px;line-height:1.1;font-family:Arial, sans-serif;">
  Ваш заказ принят! <br>
  Мы свяжемся с Вами сегодня для уточнения заказа.</div>`;

  const line = `<div style="background-color: #454545; height:3px;"></div>`;

  const yourOrders = `<div style="font-size:14px;font-weight:bold;padding-top:10px;padding-bottom:10px;">
  Ваш заказ:</div>`;

  let ordersList = '';

  cart.products.map(p => {
    ordersList += `
    <div style="display: flex; border: 1px solid #a7a7a7; padding: 10px">
      <a href="${url}product/${p.product.itemNo}" target="_blank" style="padding-right:10px;">
        <img src="${p.product.imageUrls[0].smallImage}" width="78" height="78" alt="product">
      </a>
      <div>
        <a href="${url}product/${p.product.itemNo}" target="_blank">
          <h4 style="line-height: 1.25;font-weight: 400; margin: 10px 0 10px;" class="CartItem_name__3xlM7">
            ${p.product.name}, ${p.product.color}
          </h4>
        </a>
        <div style="font-size:14px;font-weight:bold;padding-top:10px;padding-bottom:10px;">
          <span style="width: 150px; margin-right: 30px;">
            ${p.product.currentPrice} грн.
          </span>
          <span style="width: 150px; margin-right: 30px;"">
            ${p.cartQuantity} шт.
          </span>
          <span style="width: 150px;">
            ${p.cartQuantity * p.product.currentPrice} грн.
          </span>
        </div>
      </div>
    </div>`;
    return null;
  });

  const orders = `${yourOrders}<div style="border: 1px solid #a7a7a7; border-radius: 4px;">${ordersList}</div>`;

  const summ = `<div style="font-size:12px;padding-top:20px;line-height:1.4;">
  Стоимость заказа: ${totalPrice} грн. <br>
  Доставка: стоимость доставки согласно тарифам "Нова пошта"</div>
  <div style="font-size:14px; padding:20px 0; font-weight:bold;">
  Сумма к оплате: ${totalPrice} грн.
  </div>`;

  const custommer = `<div style="font-size:12px;padding-top:20px;line-height:1.4;">
    E-mail: <span style="font-weight:bold;">${values.email}</span> <br>
    Мобильный телефон: <span style="font-weight:bold;">${values.phone}</span> <br>
    Адрес доставки: <span style="font-weight:bold;">${values.delivery}</span> <br>
    Способ доставки: <span style="font-weight:bold;">${values.delivery}</span> <br>
    Способ оплаты: <span style="font-weight:bold;">${values.payment}</span> <br>
  </div>`;

  const htmlString = `<div style="padding: 10px 10px 10px 30px">
    ${logo}${greeting}${ordersTitle}${line}${orders}${summ}${line}${custommer}
  </div>`;

  return htmlString;
};
