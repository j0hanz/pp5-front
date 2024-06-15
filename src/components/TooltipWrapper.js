import React, { useCallback } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const TooltipWrapper = React.memo(
  ({ children, message, placement = 'bottom' }) => {
    const renderTooltip = useCallback(
      (props) => (
        <Tooltip
          id={`tooltip-${message.toLowerCase().replace(/ /g, '-')}`}
          {...props}
        >
          {message}
        </Tooltip>
      ),
      [message],
    );

    return (
      <OverlayTrigger
        placement={placement}
        delay={{ show: 100, hide: 500 }}
        overlay={renderTooltip}
      >
        {children}
      </OverlayTrigger>
    );
  },
);

export default TooltipWrapper;
