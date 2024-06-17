import React, { useCallback } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './styles/TooltipWrapper.css';

// TooltipWrapper component to display tooltips on elements
const TooltipWrapper = React.memo(
  ({ children, message, placement = 'bottom', tooltipClass }) => {
    // Function to render the tooltip
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
      // OverlayTrigger to attach tooltip to children elements
      <OverlayTrigger
        placement={placement}
        delay={{ show: 50, hide: 250 }}
        overlay={renderTooltip}
      >
        {children}
      </OverlayTrigger>
    );
  },
);

export default TooltipWrapper;
