import React, { useCallback } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './styles/TooltipWrapper.css';

const TooltipWrapper = React.memo(
  ({ children, message, placement = 'bottom', tooltipClass }) => {
    const renderTooltip = useCallback(
      (props) => (
        <Tooltip
          id={`tooltip-${message.toLowerCase().replace(/ /g, '-')}`}
          {...props}
          className={tooltipClass}
        >
          {message}
        </Tooltip>
      ),
      [message, tooltipClass],
    );

    return (
      <OverlayTrigger
        placement={placement}
        delay={{ show: 100, hide: 300 }}
        overlay={renderTooltip}
      >
        {children}
      </OverlayTrigger>
    );
  },
);

export default TooltipWrapper;
