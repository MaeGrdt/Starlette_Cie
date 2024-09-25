import PropTypes from 'prop-types';
import nextArrowImg from '../../assets/icons/next-arrow.svg';
import prevArrowImg from '../../assets/icons/prev-arrow.svg';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: `url(${nextArrowImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        right: '480px',
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: `url(${prevArrowImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        left: '490px',
      }}
      onClick={onClick}
    />
  );
}

// Ajout des propTypes pour valider les props
NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export { NextArrow, PrevArrow };
