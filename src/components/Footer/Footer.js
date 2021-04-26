import React from 'react';
import styles from './Footer.module.scss';
import footerLogo from './img/footerLogo.png';
import visaMaster from './img/paymentVisaMaster.png';
import privat24 from './img/paymentPrivat24.png';
import Icons from '../Icons/Icons';
import Container from '../Container/Container';

const Footer = () => {
  return (
    <Container>
      <div className={styles.footer}>
        <div className={styles.footerPayment}>
          <nav>
            <a href='/'>
              <img className={styles.footerPaymentLogo} src={footerLogo} alt='footerLogo' />
            </a>
          </nav>
          <article className={styles.footerCopyright}>
            © 2014—2021 <br />
            Демонстрационный интернет-магазин
          </article>
          <article className={styles.footerTypeOfPayment}>
            Принимаем к оплате
            <nav className={styles.footerPaymentCard}>
              <a href='https://www.liqpay.ua/' target='_blank' rel='noreferrer'>
                <img src={visaMaster} alt='' />
              </a>
              <a href='https://privat24.ua/' target='_blank' rel='noreferrer'>
                <img src={privat24} alt='' />
              </a>
            </nav>
          </article>
          <nav className={styles.footerPaymentMobileVersion}>
            <a href='/' id={styles.footerPaymentMobileVersionLink}>
              <Icons type='mobile' />
              Мобильная версия
            </a>
          </nav>
        </div>
        <nav className={styles.catalog}>
          <article className={styles.footerHeading}>Каталог</article>
          <ul className={styles.footerMenu}>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                Мужские
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                Женские
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                Детские
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                Аксессуары
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                Бренды
              </a>
            </li>
          </ul>
        </nav>
        <nav className={styles.infoForClients}>
          <article className={styles.footerHeading}>Клиентам</article>
          <ul className={styles.footerMenu}>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                Вход в личный кабинет
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                О Нас
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                Оплата и доставка
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                Обмен и возврат
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                Контактная информация
              </a>
            </li>
            <li className={styles.footerMenuLi}>
              <a href='/' id={styles.footerMenuLiLink}>
                Блог
              </a>
            </li>
          </ul>

          <article>
            Мы в соцсетях
            <br />
            <nav>
              <a className={styles.footerSocialLink} title='Мы Вконтакте!' href='https://vk.com/'>
                <Icons type='vk' />
              </a>
              <a className={styles.footerSocialLink} title='Мы в Facebook!' href='https://www.facebook.com/'>
                <Icons type='facebook' />
              </a>
              <a className={styles.footerSocialLink} title='Мы в твиттере!' href='https://twitter.com/'>
                <Icons type='twitter' />
              </a>
              <a className={styles.footerSocialLink} title='Мы в инстаграмме' href='https://instagram.com/'>
                <Icons type='instagram' />
              </a>
            </nav>
          </article>
        </nav>
        <div className={styles.Contacts}>
          <article className={styles.footerHeading}>Контактная информация</article>
          <div className={styles.footerContacts}>
            <article className={styles.footerContactsTel}>
              <article className={styles.footerContactsTelIcons}>
                <Icons type='telephone' />
                <span id={styles.iconMessage}>044 111 22 33</span>
              </article>
              <span id={styles.iconMessage}>067 111 22 33</span>
              <br />
              <span id={styles.iconMessage}>Перезвонить вам?</span>
            </article>
            <div>
              <Icons type='whatsApp' />
              <span id={styles.iconMessage}>whats-app</span>
              <br />
              <Icons type='telegram' />
              <span id={styles.iconMessage}>telegram</span>
              <br />
              <Icons type='skype' />
              <span id={styles.iconMessage}>skype</span>
              <br />
              <Icons type='email' />
              <span id={styles.iconMessage}>mail@mail.com</span>
              <nav className={styles.footerContactsLocation}>
                <Icons type='geolocation' />
                <span id={styles.iconMessage}>Киев, ул. Крещатик</span>
                <nav className={styles.roadMap}>
                  <a href='/'>Карта проезда</a>
                </nav>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
