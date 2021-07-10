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
import SocialList from '../SocialList/SocialList';
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
                  <Logo white />
                ) : (
                  <NavLink to={INDEX_ROUTE}>
                    <Logo white />
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
                  <Icons type='mobile' color='#fff' />
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
            <SocialList
              className={styles.social}
              classItem={styles.socialLink}
              classIcon={styles.socIcon}
              color='#fff'
            />
          </div>
          <div className={`${styles.columnDouble} ${styles.contacts}`}>
            <h4 className={styles.heading}>Контактная информация</h4>
            <div className={styles.contactsColumn}>
              <nav>
                <ul className={styles.menuList}>
                  <li className={styles.menuItem}>
                    <Icons type='phone' className={styles.icons} color='#fff' />
                    <a href='tel:+380440000000' className={styles.link}>
                      044 000-00-00
                    </a>
                  </li>
                  <li className={styles.menuItem}>
                    <Icons type='phone' className={styles.icons} color='#fff' />
                    <a href='tel:+380950000000' className={styles.link}>
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
                    <Icons type='whatsApp' className={styles.icons} color='#fff' />
                    <a
                      href='https://api.whatsapp.com/send?phone=whats-app'
                      className={styles.link}
                      target='blank'
                      rel='noreferrer'
                    >
                      whats-app
                    </a>
                  </li>
                  <li className={styles.menuItem}>
                    <Icons type='telegram' className={styles.icons} color='#fff' />
                    <a href='tg://resolve?domain=telegram' className={styles.link} target='blank' rel='noreferrer'>
                      telegram
                    </a>
                  </li>
                  <li className={styles.menuItem}>
                    <Icons type='skype' className={styles.icons} color='#fff' />
                    <a href='skype:skype?call' className={styles.link} target='blank' rel='noreferrer'>
                      skype
                    </a>
                  </li>
                  <li className={styles.menuItem}>
                    <Icons type='email' className={styles.icons} color='#fff' />
                    <a href='mailto:timeshop.dan@gmail.com' className={styles.link} target='blank' rel='noreferrer'>
                      mail@gmail.com
                    </a>
                  </li>
                </ul>
                <div className={styles.geolocation}>
                  <Icons type='geolocation' className={styles.geolocationIcons} color='#fff' />
                  <span className={styles.adress}>
                    Киев, пр. Павла
                    <br />
                    Тичины 1в
                  </span>
                  <a
                    style={{ border: 'none' }}
                    href='https://goo.gl/maps/c1oXdJR34nr9t1666'
                    className={styles.link}
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
        <div className={styles.mobileContainer}>
          <div className={styles.mobBlock}>
            <a href='tel:+380440000000' className={`${styles.link} ${styles.mobNumbers}`}>
              044 000-00-00
            </a>
            <a href='tel:+380950000000' className={`${styles.link} ${styles.mobNumbers}`}>
              095 000-00-00
            </a>
          </div>
          <div className={styles.mobBlock}>
            <a className={styles.link} href='/pages/contact-info'>
              Контактная информация
            </a>
          </div>
          <div className={styles.mobCopyright}>
            © 2014—2021
            <br />
            Интернет-магазин топовых часов
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
