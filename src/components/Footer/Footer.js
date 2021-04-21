import React from "react";
import styles from "./Footer.module.scss";
import footerLogo from "./img/footerLogo.png";
import visaMaster from "./img/paymentVisaMaster.png";
import privat24 from "./img/paymentPrivat24.png";
import { iconMobile } from "../../theme/icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerPayment}>
        <div>
          <a href="/">
            <img
              className={styles.footerPaymentLogo}
              src={footerLogo}
              alt="footerLogo"
            />
          </a>
        </div>
        <div className={styles.footerCopyright}>
          © 2014—2021 <br />
          Демонстрационный интернет-магазин
        </div>
        <div className={styles.footerTypeOfPayment}>
          Принимаем к оплате
          <div className={styles.footerPaymentCard}>
            <a href="https://www.liqpay.ua/" target="_blank" rel="noreferrer">
              <img src={visaMaster} alt="" />
            </a>
            <a href="https://privat24.ua/" target="_blank" rel="noreferrer">
              <img src={privat24} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.footerPaymentMobileVersion}>
          <a href="/" id={styles.footerPaymentMobileVersionLink}>
            <div> {iconMobile}</div>
            Мобильная версия
          </a>
        </div>
      </div>
      <div className={styles.catalog}>
        <div className={styles.footerHeading}>Каталог</div>
        <ul className={styles.footerMenu}>
          <li className={styles.footerMenuLi}>
            <a href="/" id={styles.footerMenuLiLink}>
              Мужские
            </a>
          </li>
          <li className={styles.footerMenuLi}>
            <a href="/" id={styles.footerMenuLiLink}>
              Женские
            </a>
          </li>
          <li className={styles.footerMenuLi}>
            <a href="/" id={styles.footerMenuLiLink}>
              Детские
            </a>
          </li>
          <li className={styles.footerMenuLi}>
            <a href="/" id={styles.footerMenuLiLink}>
              Аксессуары
            </a>
          </li>
          <li className={styles.footerMenuLi}>
            <a href="/" id={styles.footerMenuLiLink}>
              Бренды
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.infoForClients}>
        <div>
          <div className={styles.footerHeading}>Клиентам</div>
          <ul className={styles.footerMenu}>
            <li className={styles.footerMenuLi}>
              <a href="/" id={styles.footerMenuLiLink}>
                Вход в личный кабинет
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href="/" id={styles.footerMenuLiLink}>
                О Нас
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href="/" id={styles.footerMenuLiLink}>
                Оплата и доставка
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href="/" id={styles.footerMenuLiLink}>
                Обмен и возврат
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href="/" id={styles.footerMenuLiLink}>
                Контактная информация
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href="/" id={styles.footerMenuLiLink}>
                Блог
              </a>
            </li>
          </ul>
        </div>
        <div>
          Мы в соцсетях
          <div>
            <a title="Мы Вконтакте!" href="https://vk.com/">
              <svg
                id={styles.infoForClientsSocialNetworksIcon}
                viewBox="0 0 18 18"
              >
                <path d="M15.5 0h-13C1.1 0 0 1.1 0 2.5v13C0 16.9 1.1 18 2.5 18h13c1.4 0 2.5-1.1 2.5-2.5v-13C18 1.1 16.9 0 15.5 0zm-.9 13h-1.7s-.4.1-.8-.2c-.6-.4-1.2-1.5-1.7-1.4-.4.1-.4 1.1-.4 1.1s0 .2-.1.3c-.1.2-.4.2-.4.2h-.7s-1.6.1-3.1-1.4c-1.6-1.6-3-4.9-3-4.9s-.1-.2 0-.3c.1-.1.4-.1.4-.1h1.8s.2 0 .3.1l.2.2s.2.7.6 1.3c.7 1.3 1.1 1.6 1.3 1.4.4-.2.3-1.8.3-1.8s0-.6-.2-.8c-.2-.2-.4-.3-.6-.3-.1 0 .1-.2.3-.4.3-.1.9-.1 1.6-.1.5 0 .7 0 .9.1.6.2.4.7.4 2.1 0 .4-.1 1.1.2 1.3.1.1.5 0 1.3-1.4.4-.7.7-1.5.7-1.5s.1-.2.2-.2c.1-.1.2 0 .2 0h1.9s.6 0 .7.2c.1.3-.2.9-1 1.9-1.3 1.7-1.4 1.5-.4 2.5 1 .9 1.2 1.4 1.2 1.4.5.6-.4.7-.4.7z" />
              </svg>
            </a>
            <a title="Мы в Facebook!" href="https://www.facebook.com/">
              <svg
                id={styles.infoForClientsSocialNetworksIcon}
                viewBox="0 0 18 18"
              >
                <path d="M15.5 0h-13C1.1 0 0 1.1 0 2.5v13C0 16.9 1.1 18 2.5 18h13c1.4 0 2.5-1.1 2.5-2.5v-13C18 1.1 16.9 0 15.5 0zM15 8.3v2.2h-3V18H9.8v-7.5H8.3V8.3h1.5V5.8c0-1.6.8-2.8 2.7-2.8H15v2.2h-2.3c-.6 0-.7.3-.7.6v2.4h3z" />
              </svg>
            </a>
            <a title="Мы в твиттере!" href="https://twitter.com/">
              <svg
                id={styles.infoForClientsSocialNetworksIcon}
                viewBox="0 0 64 64"
              >
                <path d="M64 12.664a26.747 26.747 0 0 1-7.542 2.014c2.714-1.582 4.795-4.09 5.773-7.076m0 0a26.708 26.708 0 0 1-8.336 3.104c-2.396-2.484-5.81-4.039-9.586-4.039-7.25 0-13.13 5.727-13.13 12.793 0 1 .117 1.977.341 2.914-10.911-.536-20.587-5.626-27.064-13.366a12.47 12.47 0 0 0-1.776 6.43c0 4.439 2.315 8.354 5.839 10.648a13.358 13.358 0 0 1-5.945-1.602v.162c0 6.197 4.523 11.367 10.531 12.541a13.547 13.547 0 0 1-5.93.218c1.672 5.08 6.521 8.779 12.263 8.883-4.492 3.43-10.151 5.477-16.305 5.477A27.22 27.22 0 0 1 0 51.585a37.879 37.879 0 0 0 20.128 5.748c24.153 0 37.359-19.492 37.359-36.395 0-.555-.014-1.105-.037-1.658A26.168 26.168 0 0 0 64 12.663" />
              </svg>
            </a>
            <a title="Мы в инстаграмме" href="https://instagram.com/">
              <svg
                id={styles.infoForClientsSocialNetworksIcon}
                viewBox="0 0 18 18"
              >
                <path d="M15.5 0h-13C1.1 0 0 1.1 0 2.5v13C0 16.9 1.1 18 2.5 18h13c1.4 0 2.5-1.1 2.5-2.5v-13C18 1.1 16.9 0 15.5 0zM9 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm5.6-9.3c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.3 1.2-1.3s1.2.6 1.2 1.3c0 .6-.5 1.2-1.2 1.2zM9 6C7.3 6 6 7.3 6 9s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.Contacts}>
        <div className={styles.footerHeading}>Контактная информация</div>
        <div className={styles.footerContacts}>
          <div className={styles.footerContactsTel}>
            <div className={styles.footerContactsTelIcons}>
              <svg id={styles.iconMessage} viewBox="0 0 64 64">
                <path d="M32 0C14.328 0 0 14.328 0 32s14.328 32 32 32 32-14.328 32-32S49.672 0 32 0zm15.555 44.121c-.719.684-1.344 1.441-2.063 1.965-1.742 1.246-3.914 1.914-6.438 1.945-2.48.031-4.488-.727-6.32-1.602-3.578-1.711-6.453-4.219-9.188-7.023-2.688-2.766-5.199-6.07-6.672-9.773-1.836-4.625-1.184-9.492 1.328-12.617.422-.531 1.105-1.098 1.727-1.672.625-.586 1.188-1.273 2.086-1.484 2.043-.48 3.492 1.781 4.59 3.344 1.066 1.508 2.375 3.281 1.965 5.328-.223 1.141-1.223 1.805-1.969 2.512-.738.691-1.879 1.355-2.117 2.379-.391 1.672.695 3.359 1.367 4.316 1.516 2.164 3.324 4.098 5.598 5.793 1.098.824 2.625 1.922 4.09 1.559 2.188-.543 2.656-3.293 5.043-3.762 2.273-.445 3.895 1.148 5.234 2.203 1.293 1.023 3.363 2.313 3.305 4.16-.035 1.062-.855 1.757-1.566 2.429z" />
              </svg>
              044 111 22 33
            </div>
            067 111 22 33
            <br />
            Перезвонить вам?
          </div>
          <div>
            <svg id={styles.iconMessage} viewBox="-233 356.9 128 128">
              <path d="M-169 356.9c-35.3 0-64 28.7-64 64 0 14 4.5 27 12.2 37.5l-8 23.8 24.6-7.9c10.1 6.7 22.2 10.6 35.2 10.6 35.3 0 64-28.7 64-64s-28.7-64-64-64zm37.3 90.4c-1.5 4.4-7.7 8-12.6 9-3.3.7-7.7 1.3-22.4-4.8-18.8-7.8-30.9-26.9-31.9-28.1-.9-1.2-7.6-10.1-7.6-19.3 0-9.2 4.7-13.7 6.5-15.6 1.5-1.6 4.1-2.3 6.5-2.3.8 0 1.5 0 2.1.1 1.9.1 2.8.2 4.1 3.2 1.5 3.7 5.3 12.9 5.8 13.8.5.9.9 2.2.3 3.5-.6 1.3-1.1 1.8-2.1 2.9-.9 1.1-1.8 1.9-2.8 3.1-.9 1-1.8 2.1-.8 4 1.1 1.8 4.9 8 10.4 12.9 7.1 6.4 12.9 8.4 15 9.3 1.5.6 3.4.5 4.5-.7 1.4-1.5 3.2-4.1 5-6.6 1.3-1.8 2.9-2 4.6-1.4 1.7.6 10.9 5.1 12.8 6.1 1.9.9 3.1 1.4 3.6 2.2.5.6.5 4.3-1 8.7z" />
            </svg>
            whats-app
            <br />
            <svg id={styles.iconMessage} viewBox="0 0 64 64">
              <path d="M41.7 21.3c-.3.1-.7.3-.9.5-6.4 4-12.7 8-19.1 12-.4.2-.4.4-.3.8.5 1.3.9 2.7 1.3 4.1l1.8 5.4h.1v-.2c.2-2 .4-3.9.5-5.9 0-.4.2-.8.5-1 2.6-2.3 5.2-4.7 7.8-7.1 2.9-2.6 5.8-5.2 8.6-7.8.2-.2.3-.4.4-.7-.2 0-.5-.1-.7-.1z" />
              <path d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm17.5 17.4c-.1 1.1-.4 2.2-.6 3.3-1.8 8.7-3.7 17.4-5.5 26-.4 2.1-1.9 2.6-3.6 1.3-2.8-2.1-5.7-4.2-8.5-6.3-.1-.1-.3-.2-.4-.3-1.5 1.5-3.1 3-4.6 4.4-.5.5-1.1.8-1.9.8-.5 0-.8-.3-1-.7-1.2-3.6-2.3-7.2-3.5-10.7-.1-.3-.3-.5-.6-.6-2.7-.8-5.4-1.7-8.1-2.5-.4-.1-.8-.3-1.2-.6-.6-.4-.6-1-.1-1.4.5-.4 1-.8 1.6-1 3.3-1.3 6.7-2.6 10-3.9 8.5-3.3 16.9-6.5 25.4-9.8 1.5-.6 2.8.3 2.6 2z" />
            </svg>
            telegram
            <br />
            <svg id={styles.iconMessage} viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.717 8.084c0 .554-.062 1.094-.178 1.615.295.583.461 1.24.461 1.937C16 14.046 14.018 16 11.575 16c-.757 0-1.47-.188-2.093-.519a7.73 7.73 0 0 1-1.396.127c-4.216 0-7.632-3.369-7.632-7.524 0-.519.053-1.024.154-1.513A4.305 4.305 0 0 1 0 4.363C0 1.953 1.981 0 4.425 0c.866 0 1.673.246 2.355.67.424-.073.86-.11 1.305-.11 4.215 0 7.632 3.368 7.632 7.524zM4.649 4.368c.305-.44.75-.783 1.323-1.018.566-.232 1.239-.35 2.001-.349.609 0 1.144.078 1.592.232.45.155.828.365 1.126.622.3.26.524.538.664.825.141.291.213.581.213.862 0 .27-.094.515-.28.729a.892.892 0 0 1-.7.324c-.253 0-.45-.068-.587-.203-.127-.125-.26-.32-.408-.6-.17-.358-.375-.64-.612-.839-.23-.193-.612-.29-1.139-.29-.488 0-.886.108-1.182.323-.285.207-.423.442-.423.723a.71.71 0 0 0 .136.44c.097.131.234.247.407.343.18.099.365.179.549.236.19.058.508.143.944.255.553.132 1.06.278 1.508.438.454.16.847.359 1.168.59.325.235.585.538.768.899.185.362.277.81.277 1.33 0 .622-.16 1.189-.477 1.685-.315.495-.78.886-1.385 1.165-.6.275-1.316.414-2.132.414-.98 0-1.801-.19-2.443-.567a3.324 3.324 0 0 1-1.122-1.104c-.29-.462-.437-.922-.437-1.364 0-.277.096-.517.284-.713a.948.948 0 0 1 .712-.294.85.85 0 0 1 .6.232c.159.147.293.365.401.646.121.307.253.566.392.77.134.195.326.36.572.49.247.128.58.195.99.195.565 0 1.027-.134 1.374-.397.34-.257.506-.564.506-.942 0-.298-.087-.533-.263-.716a1.816 1.816 0 0 0-.729-.445c-.31-.108-.73-.223-1.25-.344-.71-.168-1.31-.367-1.789-.592-.49-.23-.883-.55-1.172-.95-.293-.404-.441-.914-.441-1.513 0-.57.156-1.085.464-1.528z"
              />
            </svg>
            skype
            <br />
            <svg id={styles.iconMessage} viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 10.5c0 .828.598 1.5 1.333 1.5h13.334c.735 0 1.333-.672 1.333-1.5v-9c0-.827-.598-1.5-1.333-1.5H1.333C.598 0 0 .673 0 1.5v9zm8-2.637L1.537 2.818c-.17-.134-.22-.409-.11-.615.111-.206.34-.265.51-.132L8 6.804l6.063-4.733c.17-.133.399-.074.51.132.11.206.06.481-.11.615L8 7.863zM1.369 10a.355.355 0 0 1-.307-.198c-.113-.204-.067-.48.102-.616L4.48 6.519c.17-.136.398-.081.51.123.114.205.068.48-.101.617L1.573 9.925A.326.326 0 0 1 1.37 10zm13.058-.075c.063.05.134.075.204.075.119 0 .236-.07.307-.198.113-.204.067-.48-.102-.616L11.52 6.519c-.17-.136-.398-.081-.51.123-.114.205-.068.48.101.617l3.316 2.666z"
              />
            </svg>
            mail@mail.com
            <div className={styles.footerContactsLocation}>
              <svg id={styles.iconMessage} viewBox="0 0 64 64">
                <svg viewBox="0 0 64 64">
                  <path d="M56.381 24.381C56.381 10.914 45.468 0 32 0 18.536 0 7.619 10.914 7.619 24.381a24.276 24.276 0 0 0 5.355 15.238h-.022L32 64l19.048-24.381h-.021a24.277 24.277 0 0 0 5.354-15.238zM32 33.523a9.143 9.143 0 0 1-9.143-9.143A9.141 9.141 0 0 1 32 15.237a9.143 9.143 0 0 1 0 18.286z" />
                </svg>
              </svg>
              Киев, ул. Крещатик
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;