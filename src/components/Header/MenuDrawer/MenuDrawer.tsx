import { Drawer } from 'antd';
import style from './MenuDrawer.module.scss';
import Logo from '@/assets/logo/logo.png';

interface MenuDrawerProps {
  isOpenDrawer: boolean;
  onSetIsOpenDrawer: (isOpenDrawer: boolean) => void;
}

const MenuDrawer = (props: MenuDrawerProps) => {
  return (
    <>
      {/*  抽屉菜单*/}
      <Drawer
        className={style['drawer-menu']}
        placement="right"
        closable={true}
        styles={{
          body: {
            padding: 0,
          },
        }}
        onClose={() => props.onSetIsOpenDrawer(false)}
        open={props.isOpenDrawer}
      >
        <div className={style['drawer']}>
          <div className={style['drawer__header']}>
            <img src={Logo} height={100} width={150} alt="logo" />
          </div>
          <div className={style['drawer__links']}></div>
        </div>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
