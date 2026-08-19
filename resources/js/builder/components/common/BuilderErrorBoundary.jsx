import React, { Component } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export class BuilderErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[BuilderErrorBoundary Caught Error]:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="p-4 my-2 border border-amber-200 bg-amber-50/80 rounded-xl text-amber-900 text-xs flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2 overflow-hidden">
            <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
            <div className="truncate">
              <span className="font-bold">Rendering Warning: </span>
              <span className="text-amber-700">{this.props.title || 'Component/Section could not be displayed properly.'}</span>
              {this.state.error?.message && (
                <span className="block text-[10px] text-amber-600 font-mono truncate mt-0.5">
                  {this.state.error.message}
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={this.handleReset}
            className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-[11px] flex items-center gap-1 shrink-0 transition"
          >
            <RefreshCw className="h-3 w-3" />
            <span>Reload</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default BuilderErrorBoundary;
