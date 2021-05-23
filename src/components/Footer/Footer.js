import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import Container from '../Container/Container';
import { INDEX_ROUTE } from '../../utils/consts';
import { categoriesLoadingSelector } from '../../store/catalog/selectors';
import Logo from '../../theme/Logo';
import visaMaster from './img/paymentVisaMaster.png';
import privat24 from './img/paymentPrivat24.png';
import Icons from '../Icons/Icons';
import Loader from '../Loader/Loader';
import CategoriesList from '../CategoriesList/CategoriesList';
import DifferentPagesList from '../DifferentPagesList/DifferentPagesList';
import styles from './Footer.module.scss';

const Footer = () => {
  const location = useLocation();
  const catalogIsLoading = useSelector(categoriesLoadingSelector);

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.flexContainer}>
          <div className={styles.columnDouble}>
            <div className={styles.colFlex}>
              <div className={styles.logo}>
                {location.pathname === '/' ? (
                  <Logo />
                ) : (
                  <NavLink to={INDEX_ROUTE}>
                    <Logo />
                  </NavLink>
                )}
              </div>
              <div className={styles.copyright}>
                © 2014—2021
                <br />
                Интернет-магазин топовых часов
              </div>
              <div className={styles.payment}>
                <span>Принимаем к оплате</span>
                <div className={styles.paymentBlock}>
                  <a href='https://www.liqpay.ua/' target='_blank' rel='noreferrer'>
                    <img src={visaMaster} alt='' />
                  </a>
                  <a href='https://privat24.ua/' target='_blank' rel='noreferrer'>
                    <img src={privat24} alt='' />
                  </a>
                </div>
              </div>
              <div className={styles.mobileVersion}>
                <span className={styles.mobileVersion}>
                  <Icons type='mobile' color='rgba(125,125,125, 0.7)' />
                  Мобильная версия
                </span>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>Каталог</h4>
            <nav>
              <ul className={styles.menuList}>
                {catalogIsLoading ? <Loader /> : <CategoriesList className={styles.link} classItem={styles.menuItem} />}
              </ul>
            </nav>
          </div>
          <div className={styles.column}>
            <h4 className={styles.heading}>Клиентам</h4>
            <nav className={styles.differentPagesList}>
              <ul className={styles.menuList}>
                <DifferentPagesList classLink={styles.link} classItem={styles.menuItem} />
              </ul>
            </nav>
            <span>Мы в соцсетях</span>
            <nav className={styles.social}>
              <a className={styles.socialLink} target='blank' title='Мы Вконтакте!' href='https://vk.com/'>
                <Icons type='vk' className={styles.socIcon} />
              </a>
              <a className={styles.socialLink} target='blank' title='Мы в Facebook!' href='https://www.facebook.com/'>
                <Icons type='facebook' className={styles.socIcon} />
              </a>
              <a className={styles.socialLink} target='blank' title='Мы в твиттере!' href='https://twitter.com/'>
                <Icons type='twitter' className={styles.socIcon} />
              </a>
              <a className={styles.socialLink} target='blank' title='Мы в инстаграмме' href='https://instagram.com/'>
                <Icons type='instagram' className={styles.socIcon} />
              </a>
            </nav>
          </div>
          <div className={`${styles.columnDouble} ${styles.contacts}`}>
            <h4 className={styles.heading}>Контактная информация</h4>
            <div className={styles.contactsColumn}>
              <nav>
                <ul className={styles.menuList}>
                  <li className={styles.menuItem}>
                    <Icons type='phone' className={styles.icons} />
                    <a href='tel:+380440000000' className={`${styles.contactsLink} ${styles.link}`}>
                      044 000-00-00
                    </a>
                  </li>
                  <li className={styles.menuItem}>
                    <Icons type='phone' className={styles.icons} />
                    <a href='tel:+380950000000' className={`${styles.contactsLink} ${styles.link}`}>
                      095 000-00-00
                    </a>
                  </li>
                  <li className={styles.menuItem}>
                    <span className={`${styles.call} ${styles.link}`}>Перезвонить вам?</span>
                  </li>
                </ul>
              </nav>
              <nav>
                <ul className={styles.menuList}>
                  <li className={styles.menuItem}>
                    <Icons type='whatsApp' className={styles.icons} />
                    <a
                      href='https://api.whatsapp.com/send?phone=whats-app'
                      className={`${styles.contactsLink} ${styles.link}`}
                      target='blank'
                      rel='noreferrer'
                    >
                      whats-app
                    </a>
                  </li>
                  <li className={styles.menuItem}>
                    <Icons type='telegram' className={styles.icons} />
                    <a
                      href='tg://resolve?domain=telegram'
                      className={`${styles.contactsLink} ${styles.link}`}
                      target='blank'
                      rel='noreferrer'
                    >
                      telegram
                    </a>
                  </li>
                  <li className={styles.menuItem}>
                    <Icons type='skype' className={styles.icons} />
                    <a
                      href='skype:skype?call'
                      className={`${styles.contactsLink} ${styles.link}`}
                      target='blank'
                      rel='noreferrer'
                    >
                      skype
                    </a>
                  </li>
                  <li className={styles.menuItem}>
                    <Icons type='email' className={styles.icons} />
                    <a
                      href='mailto:timeshop.dan@gmail.com'
                      className={`${styles.contactsLink} ${styles.link}`}
                      target='blank'
                      rel='noreferrer'
                    >
                      mail@gmail.com
                    </a>
                  </li>
                </ul>
                <div className={styles.geolocation}>
                  <Icons type='geolocation' className={styles.geolocationIcons} />
                  <span className={styles.adress}>
                    Киев, пр. Павла
                    <br />
                    Тичины 1в
                  </span>
                  <a
                    style={{ border: 'none' }}
                    href='https://goo.gl/maps/c1oXdJR34nr9t1666'
                    className={`${styles.contactsLink} ${styles.link}`}
                    target='blank'
                    rel='noreferrer'
                  >
                    Карта проезда
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
